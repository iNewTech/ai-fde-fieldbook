from dataclasses import dataclass


@dataclass(frozen=True)
class AudioEvent:
    turn_id: str
    kind: str
    timestamp_ms: int
    payload: bytes = b''


async def handle_event(event: AudioEvent, *, current_turn_id: str) -> list[AudioEvent]:
    # TODO: define interruption, queued-audio cancellation and stale-result rules.
    # TODO: use a proven audio/agent library; implement the application contract.
    raise NotImplementedError
