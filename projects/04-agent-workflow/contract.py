from dataclasses import dataclass


@dataclass
class WorkflowState:
    request_id: str
    tenant_id: str
    status: str
    remaining_calls: int
    evidence: list[dict]
    approved_action_digest: str | None = None


async def advance(state: WorkflowState, observation: dict) -> WorkflowState:
    # TODO: validate transitions, budgets, evidence and approval identity.
    # TODO: define persistence and replay behavior before adding side effects.
    raise NotImplementedError
