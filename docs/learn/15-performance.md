# 15. Cost, latency and scale

Week 13 | Prerequisite: 14 | Output: measured performance comparison

## The enterprise problem

The assistant is acceptable at five concurrent users but slow at fifty. A larger model improves some answers while making the pilot too expensive.

## First principles

Decompose response time into queueing, authentication, retrieval, reranking, model time and tool work. Streaming reduces time to first visible output but may not reduce time to a usable completed answer. Measure p50 and p95 under a stated workload; an average hides the slow tail.

Token economics starts with input tokens times input rate plus output tokens times output rate. Add embeddings, storage, tools, retries and human review. With fictional prices of $1 per million input tokens and $4 per million output tokens, a 2,000-input/500-output request costs $0.004 in model tokens. Ten thousand such requests cost $40 before all other expenses. These are arithmetic assumptions, not provider prices.

Caching can avoid repeated work. Exact caches match a key; semantic caches require an additional judgment that two requests can safely share a result. Both must preserve tenant, authorization and freshness. Batching improves throughput for compatible work but may increase individual waiting time. Model routing chooses a cheaper or faster path only when it preserves the quality requirements for that slice.

At stable load, Little's Law relates work in progress to arrival rate times average time in the system. Ten requests per second at two seconds each implies about twenty in flight on average. It is not a capacity guarantee: bursts, retries and long tails demand further measurement.

## Trace an example

Removing a reranker saves 200ms but doubles wrong-policy retrievals. Parallelizing independent reads saves time without that same quality loss. Compare one intervention at a time on the same task cases and load profile.

## Independent work

Capture baseline latency, throughput, error rate and cost. Test a cache, bounded parallel reads and a routing policy. Include cold starts, bursts, rate limits and slow upstream calls. Report quality changes and tail latency, plus a load-shedding or backpressure strategy. Do not claim production scale from a tiny local benchmark.

## Required checks

1. Calculate full request cost with retries and review overhead.
2. Explain p50, p95, throughput and time to first token.
3. Demonstrate a cache eligibility test across tenants and versions.
4. Diagnose queueing and retry amplification under load.
5. Defend an optimization with both quality and performance evidence.

<TopicSupport module="15-performance" />

## Video and reading

- Video lecture: [FSDL LLMOps](https://fullstackdeeplearning.com/llm-bootcamp/spring-2023/llmops/), especially model selection and deployment.
- Primary reading: [Google SRE: Handling Overload](https://sre.google/sre-book/handling-overload/).

## Summary

### English

Optimize the measured bottleneck while preserving task quality and isolation. Count tail latency, retries and human work alongside model-token costs.

### Hinglish

Pehle actual bottleneck measure karo. Speed ya token cost improve karte waqt quality, tenant isolation, retries aur human review ka cost mat bhoolo.
