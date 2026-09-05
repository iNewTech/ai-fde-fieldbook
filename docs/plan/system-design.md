# System design track

System design is a required thread through the program. Each review starts with the workflow and constraints, then traces data, state, failure and recovery. A diagram without defended decisions does not pass.

## The review sequence

1. Clarify users, outcomes, workload, data sensitivity and non-goals.
2. Estimate request volume, concurrency, corpus growth and latency budget.
3. Define API and data contracts, source of truth and consistency/freshness needs.
4. Draw components, dependencies, trust boundaries and deployment topology.
5. Trace happy path, unauthorized request, timeout, duplicate and partial failure.
6. Define evaluation, observability, capacity limits, rollback and ownership.
7. Compare alternatives and explain what new evidence would change the design.

## Required checkpoints

| When | Design to defend | Changed constraint |
| --- | --- | --- |
| Week 3 | IBM i adapter, event replay and transactional boundary | Source sends out-of-order updates |
| Week 7 | Multi-tenant RAG, retrieval store, index versions and citations | One tenant revokes document access |
| Week 10 | Agent state, parallelism, approval and resume | Process crashes after a tool effect |
| Week 12 | Deployment topology, probes, CI/CD and rollback | New release changes index schema |
| Week 13 | Capacity, queues, caches, batching and routing | Arrival rate increases tenfold |
| Week 15 | Regulated data flows and security boundaries | External telemetry is disallowed |
| Week 16 | Realtime voice state and cancellation | User interrupts during tool execution |
| Week 17 | Video ingestion, storage and temporal retrieval | Relevant action lasts only two seconds |
| Weeks 19-20 | Full customer deployment and operation | Reviewer introduces an unfamiliar failure |

Use `templates/architecture-decision.md` for decisions. Give approximate arithmetic with assumptions; do not invent benchmark results. Compare relational and vector storage, synchronous and asynchronous work, centralized and tenant-separated resources, and managed versus self-hosted components when those choices matter.

## Practice case

A distributor has 500 support staff, 20,000 policy pages and 50,000 daily order changes. Its ERP is unavailable for maintenance nightly. Support needs a cited answer in a hypothetical p95 target of three seconds. Design a pilot for 20 staff first. State what must be measured before scaling and how the assistant behaves when live order truth is unavailable.

Video reference: [FSDL Deployment](https://fullstackdeeplearning.com/course/2022/lecture-5-deployment/). Primary reading: [Google SRE book](https://sre.google/sre-book/table-of-contents/).

## Summary

### English

System design connects customer constraints to data, components and operating behavior. Defend failure handling and trade-offs with the same care as the happy path.

### Hinglish

System design mein customer constraints ko data, components aur failure behavior se jodna hai. Sirf boxes banana enough nahi; har choice aur recovery explain karni hogi.
