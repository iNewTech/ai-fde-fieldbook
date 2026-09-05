"""Learner implementation. No network or paid API is required."""
from collections.abc import Awaitable, Callable


async def fetch_orders(
    order_ids: list[str],
    fetch_one: Callable[[str], Awaitable[dict]],
    *,
    concurrency: int = 3,
    timeout_seconds: float = 1.0,
) -> list[dict]:
    """Return one {order_id, data, error} outcome per input, in input order.

    Preserve duplicates. Success has data and error=None. A timeout has
    data=None and error='timeout'; another upstream failure uses 'upstream'.
    Reject nonpositive limits. Propagate cancellation of the whole operation.
    """
    # TODO: validate the contract, bound work, apply per-call deadlines.
    # TODO: preserve order and classify failures without hiding cancellation.
    raise NotImplementedError
