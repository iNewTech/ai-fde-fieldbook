import unittest
from contract import Source, authorized_sources


class SourceAuthorizationTests(unittest.TestCase):
    def setUp(self):
        self.sources = [
            Source('a-public', 'A', frozenset({'support'}), 1, 'A policy'),
            Source('b-public', 'B', frozenset({'support'}), 1, 'B policy'),
            Source('a-admin', 'A', frozenset({'admin'}), 1, 'Restricted'),
            Source('a-denied', 'A', frozenset(), 1, 'No readers'),
        ]

    def test_tenant_and_role_boundary(self):
        result = authorized_sources(self.sources, tenant_id='A', roles={'support'})
        self.assertEqual([s.source_id for s in result], ['a-public'])

    def test_no_roles_denies_everything(self):
        self.assertEqual(authorized_sources(self.sources, tenant_id='A', roles=set()), [])

    def test_multiple_roles_preserve_order(self):
        result = authorized_sources(self.sources, tenant_id='A', roles={'admin', 'support'})
        self.assertEqual([s.source_id for s in result], ['a-public', 'a-admin'])

    def test_unknown_tenant(self):
        self.assertEqual(authorized_sources(self.sources, tenant_id='C', roles={'admin'}), [])
