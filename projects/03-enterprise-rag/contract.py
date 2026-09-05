from dataclasses import dataclass


@dataclass(frozen=True)
class Source:
    source_id: str
    tenant_id: str
    allowed_roles: frozenset[str]
    version: int
    text: str


def authorized_sources(sources: list[Source], *, tenant_id: str, roles: set[str]) -> list[Source]:
    """Keep only same-tenant sources with at least one matching role.

    Preserve input order. Empty allowed_roles denies access. The authenticated
    application supplies identity; the model must not choose tenant or roles.
    """
    # TODO: implement this small policy contract and then enforce it at storage.
    raise NotImplementedError


async def answer_question(question: str, *, identity: dict) -> dict:
    """Return status, answer, supported claims, citations and source versions."""
    # TODO: authorize before retrieval, construct context, validate support.
    # This in-memory exercise alone is not production access enforcement.
    raise NotImplementedError
