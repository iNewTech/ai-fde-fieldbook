# 19. Voice RAG and realtime systems

Week 16 | Prerequisite: 18 | Output: P6 voice service desk

## The enterprise problem

A warehouse employee needs to ask about an order while handling packages. They interrupt, correct an ID and speak in Hindi-English. A text assistant wrapped in speech APIs can fail at turn-taking even when its answers are accurate.

## First principles

A cascaded pipeline captures audio, detects speech, transcribes, retrieves evidence, generates a response and synthesizes speech. A realtime speech model can combine stages differently. Compare latency, controllability, transcript visibility, tool support and failure recovery rather than declaring one architecture universally better.

Voice activity detection identifies likely speech segments; end-of-turn detection decides when the user has finished. Pausing to remember an order ID is not necessarily the end of a request. A short endpointing delay may feel responsive but interrupt the user; a long one makes every exchange sluggish.

Streaming introduces multiple clocks and buffers. Assign a turn ID and cancellation scope to work. On interruption, stop or discard stale synthesis, clear queued playback and prevent late tool results from changing the new turn. Do not announce a completed action until its actual outcome is known.

Measure end-of-speech to first audible response, task completion, interruption recovery and recognition errors for entity IDs. "No lag" is not a measurable promise. Set a scenario-specific target and report a distribution under realistic noise and network conditions. Provide text fallback and explicit confirmation for consequential tool actions.

## Trace an example

The user says O42, then interrupts with "sorry, O24." The old retrieval returns after the correction. A turn-bound result must be discarded rather than spoken. Exact identifiers can require readback even when the rest of the transcript is fluent.

## Independent work

Extend your existing authorized RAG service with a voice interface. Record ten consented synthetic sessions covering noise, silence, interruption, corrected identifiers, mixed language, timeout and tool denial. Implement cancellation and text fallback. Set and measure your latency target; preserve the same tenant controls as the text service.

## Required checks

1. Compare cascaded and realtime architectures using workflow constraints.
2. Trace VAD, endpointing, inference and playback latency.
3. Demonstrate interruption without stale audio or stale tool effects.
4. Test corrected identifiers and Hindi-English requests.
5. Report measured latency, task outcomes and fallback behavior.

<TopicSupport module="19-voice" />

## Video and reading

- Video course: [Voice for AI Agents and Applications](https://www.deeplearning.ai/courses/voice-for-ai-agents-and-applications), especially voice evaluation.
- Primary reading: [LiveKit Agents documentation](https://docs.livekit.io/agents/).

## Summary

### English

Voice quality depends on turn state, cancellation and audible latency as much as answer quality. Preserve authorization and confirm consequential actions explicitly.

### Hinglish

Voice mein answer ke saath turn-taking aur interruption bhi sahi chahiye. Purani audio/result cancel karo, latency measure karo aur important action se pehle clear confirmation lo.
