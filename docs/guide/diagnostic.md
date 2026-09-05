# Readiness diagnostic

Take this when you explicitly start. Allow 60-90 minutes inside week 1. Use synthetic data. Do not use generated solutions; documentation is allowed for unfamiliar Python syntax.

## Existing engineering skills

1. A webhook may repeat, arrive out of order or time out after committing. Design its event ID, version rule, transaction boundary and retry response.
2. Given order and shipment tables, explain how you would find late unshipped orders without duplicating totals across joins. Describe an index and verify its query plan.
3. A Node.js endpoint calls an unreliable upstream service. Explain cancellation, deadlines, bounded concurrency and the risk of retrying a write.
4. Demonstrate a Git branch, a small reviewable change and a revert. Explain why deleting a leaked credential from a file is insufficient.
5. Draw a read-only API boundary around an enterprise ERP or CRM system. Include identity, service authorization, auditing, data freshness and rollback.

Pass through explanation plus one small working artifact. Familiarity is expected here, but evidence determines how much repetition is needed.

## Python bridge

Write only your own implementation of this interface:

```python
async def fetch_order_summaries(order_ids: list[str], *, concurrency: int) -> list[dict]:
    # TODO: preserve input order, bound in-flight work, time out failures.
    # TODO: return a defined per-order error without swallowing cancellation.
    raise NotImplementedError
```

Use a fake upstream client, not real customer data. Explain `None`, type annotations, exceptions, context managers, iterators and async execution using JavaScript comparisons. Test an empty input, duplicate IDs, a timeout and a concurrency limit. No API key is needed.

## AI reasoning

Explain why a model can produce convincing false answers; how embeddings differ from generated answers; when SQL is preferable to RAG; how to separate retrieval failure from answer failure; and what evidence would justify an agent over a fixed workflow.

Unknown AI answers are expected at entry. The diagnostic sets the starting explanation; it is not an employment test.

## How the plan adapts

If the existing engineering checks pass, use modules 03-04 for Python and AI-specific integration risks rather than beginner Git/SQL repetition. If the Python task is incomplete, devote week 2 to it and use week 21 for spillover as needed. If several engineering fundamentals fail, extend the schedule before adding more AI scope. Keep all required competencies in the coverage map.
