import asyncio
import unittest
from adapter import fetch_orders


class AdapterContractTests(unittest.IsolatedAsyncioTestCase):
    async def test_empty_input(self):
        async def fetch(_):
            self.fail('No upstream call expected')
        self.assertEqual(await fetch_orders([], fetch), [])

    async def test_order_and_duplicates(self):
        async def fetch(order_id):
            await asyncio.sleep(0.02 if order_id == 'A' else 0)
            return {'status': order_id}
        result = await fetch_orders(['A', 'B', 'A'], fetch)
        self.assertEqual([r['order_id'] for r in result], ['A', 'B', 'A'])
        self.assertEqual([r['data']['status'] for r in result], ['A', 'B', 'A'])
        self.assertTrue(all(r['error'] is None for r in result))

    async def test_concurrency_bound(self):
        active, maximum = 0, 0
        async def fetch(order_id):
            nonlocal active, maximum
            active += 1
            maximum = max(maximum, active)
            try:
                await asyncio.sleep(0.01)
                return {'id': order_id}
            finally:
                active -= 1
        result = await fetch_orders(list('ABCDEF'), fetch, concurrency=2)
        self.assertEqual(len(result), 6)
        self.assertLessEqual(maximum, 2)
        self.assertGreater(maximum, 0)

    async def test_timeout_is_per_item(self):
        async def fetch(order_id):
            if order_id == 'slow':
                await asyncio.sleep(10)
            return {'id': order_id}
        result = await fetch_orders(['slow', 'fast'], fetch, timeout_seconds=0.02)
        self.assertEqual(result[0]['error'], 'timeout')
        self.assertIsNone(result[0]['data'])
        self.assertIsNone(result[1]['error'])

    async def test_upstream_error(self):
        async def fetch(_):
            raise ConnectionError('synthetic outage')
        result = await fetch_orders(['A'], fetch)
        self.assertEqual(result, [{'order_id': 'A', 'data': None, 'error': 'upstream'}])

    async def test_invalid_limits(self):
        async def fetch(_):
            return {}
        for settings in ({'concurrency': 0}, {'timeout_seconds': 0}):
            with self.assertRaises(ValueError):
                await fetch_orders(['A'], fetch, **settings)

    async def test_cancellation_propagates(self):
        started = asyncio.Event()
        async def fetch(_):
            started.set()
            await asyncio.sleep(10)
        task = asyncio.create_task(fetch_orders(['A'], fetch))
        try:
            await asyncio.wait_for(started.wait(), timeout=0.5)
            task.cancel()
            with self.assertRaises(asyncio.CancelledError):
                await task
        finally:
            if not task.done():
                task.cancel()
            await asyncio.gather(task, return_exceptions=True)
