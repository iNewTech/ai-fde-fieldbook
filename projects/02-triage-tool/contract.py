from typing import Literal, TypedDict


class TriageResult(TypedDict):
    category: Literal['shipment', 'billing', 'access', 'review']
    rationale: str
    needs_review: bool
    prompt_version: str


async def classify_ticket(text: str, *, request_id: str) -> TriageResult:
    # TODO: implement your baseline, validated model boundary and error contract.
    # No ERP writes or model-selected tenant identity are permitted.
    raise NotImplementedError
