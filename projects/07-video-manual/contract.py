from dataclasses import dataclass


@dataclass(frozen=True)
class EvidenceSpan:
    source_id: str
    start_seconds: float
    end_seconds: float
    modality: str
    description: str


async def retrieve_evidence(question: str, *, video_id: str, identity: dict) -> list[EvidenceSpan]:
    # TODO: retrieve authorized transcript/frame evidence with aligned times.
    # TODO: reject unsupported answers and intervals outside the source duration.
    raise NotImplementedError
