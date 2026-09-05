# Eight enterprise projects

These are cumulative assignments, not completed solutions. Use synthetic Northstar Supply data. Your implementation lives under `projects/`; the repository provides interfaces and selected tests. Each project requires source code, evidence, a short architecture decision and a customer-facing artifact.

All thresholds below are **training acceptance targets**, not claimed industry standards or observed results. Freeze the protocol before optimizing. Every listed check must pass; security and business-effect defects cannot be averaged away.

## Milestone map

Each milestone ends with a major project review. The mini-projects inside every lesson prepare one small capability for that milestone; the major project integrates and defends them.

| Milestone | Major project | Lessons feeding it | Required review |
| --- | --- | --- | --- |
| Week 4 | **P2 First AI tool** | 01-06 | Working triage tool, visual prototype, baseline, prompt evaluation and pilot one-pager |
| Week 10 | **P3 Enterprise RAG + P4 Controlled agent workflow** | 07-12 | Production RAG, evaluation report, tool boundary, agent comparison and architecture defense |
| Week 15 | **P5 Regulated rebuild and security audit** | 13-18 | Fine-tuning decision, deployment, performance, enterprise integration, threat model and governance evidence |
| Week 17 | **P6 Voice service desk + P7 Video field manual** | 19-20 | Voice interruption/latency evidence and multimodal timestamped retrieval evidence |
| Week 20 | **P8 Order-exception deployment** | 21-24 | End-to-end release, system-design defense, incident/recovery drill, outcome demo and handover |

The eight major project briefs appear below. A milestone is not complete when the code exists; its project acceptance checks and module gates must all pass.

## P1. Python bridge | Week 2

Build a typed async client for an ERP-style order API. Preserve result ordering, bound concurrency and return explicit per-order failures. Use a fake client, then add a FastAPI/Pydantic boundary as the next integration exercise.

Starter: `projects/01-python-bridge/adapter.py`. Tests: `projects/01-python-bridge/test_adapter.py`.

Acceptance: empty input works; duplicate IDs preserve defined behavior; maximum in-flight count respects the limit; timeouts do not block every other result; cancellation propagates. Explain how this differs from your Node.js implementation. Deliver a one-page adapter contract.

## P2. First AI tool | Weeks 3-4

Build a support-ticket triage service using shipment, billing and access categories plus an explicit review state. Keep ERP reads separate from generation. Compare a rules baseline, initial prompt and revised prompt on development cases; freeze at least 20 separate held-out tickets.

Starter: `projects/02-triage-tool/contract.py`. Use `data/tickets.json` only as seed data, not as the entire evaluation set.

Acceptance: valid output shape on every returned success; ambiguous cases follow the defined review policy; injected ticket instructions cannot invoke effects; provider timeout/refusal is explicit. Report per-class errors, review rate, latency and cost. Deliver the working tool, visual-flow experiment and one-page pilot recommendation.

## P3. Enterprise RAG | Weeks 5-8

Build a cited policy assistant over at least twelve original synthetic documents across two tenants, with contradictory versions, headings, tables and deleted material. Compare lexical, dense and hybrid retrieval before adding rewriting or reranking.

Starter: `projects/03-enterprise-rag/contract.py`. Selected isolation tests: `projects/03-enterprise-rag/test_contract.py`.

Acceptance: at least 40 untouched held-out questions across five meaningful slices; zero observed cross-tenant exposure in the test suite; at least 90% of answerable test responses supported by correct current citations; unanswerable cases handled explicitly; idempotent ingestion and deletion demonstrated. Zero observed leakage in a finite test set does not prove universal security. Deliver architecture, evaluation report and source-lineage trace. A target failure requires remediation, not relabeling the dataset.

## P4. Controlled agent workflow | Weeks 9-10

Extend P3 with a read-only order lookup and two bounded specialists for order and policy evidence. Compare a fixed workflow, a single agent and the specialists on the same 30 cases. Expose one capability via MCP.

Starter: `projects/04-agent-workflow/contract.py`.

Acceptance: bounded calls and execution time; no unauthorized actions; meaningful stop state; restart-safe state; injected tool output cannot expand permissions. Measure task success, cost and latency. Keep the simpler solution if specialists offer no defensible gain. Deliver comparison traces and an architecture decision.

## P5. Regulated rebuild and security audit | Weeks 11-15

Rework P3/P4 for a fictional bank or an administrative hospital-policy team. Include identity, private data boundaries, telemetry, retention, deletion and approval ownership. Keep this outside real clinical or financial decision-making.

Starter: `projects/05-regulated-audit/README.md` provides the submission contract.

Acceptance: 20 documented attack cases; denied tool effects and tenant access tested; two implemented mitigations with before/after evidence; role revocation, deletion and rollback drilled; each remaining risk has an owner. Include the fine-tuning comparison, one cloud deployment, local Kubernetes exercise and performance report developed in these weeks. Deliver risk register, audit and remediation playbook. This project does not certify legal compliance.

## P6. Voice service desk | Week 16

Put a voice interface over the authorized service. Handle streaming, silence, interruptions, corrected order IDs, Hindi-English and a text fallback. Reuse backend retrieval and tool contracts.

Starter: `projects/06-voice-desk/contract.py`.

Acceptance: ten synthetic test sessions including cancellation and slow tools; no stale audio after the cancellation boundary; consequential actions require explicit confirmation; report end-of-speech-to-first-audio p50/p95 and task outcomes. Set a feasible target before testing, such as a lab p95 under two seconds, and report missed targets honestly. Deliver short consented recordings and a latency/state diagram.

## P7. Video field manual | Week 17

Use your own short assembly or inspection video. Combine transcript, frames, visible text and timestamps. Compare transcript-only with multimodal retrieval on fifteen questions, including silent actions and event order.

Starter: `projects/07-video-manual/contract.py`.

Acceptance: every returned citation is within the clip duration and inspected for support; absent evidence produces an explicit limitation; demonstrate one visual-only case and one temporal-order case; test alignment after segmentation. Report timestamp accuracy and missed-event rates. Deliver a retrieval comparison and a playable local demo.

## P8. Order-exception deployment | Weeks 19-20

Integrate prior work into one bounded support workflow. Keep order truth in the ERP adapter, policy evidence in authorized retrieval and business effects behind review. Select features based on the charter rather than including every technology.

Starter: `projects/08-capstone/README.md` defines the evidence bundle.

Acceptance: all module and project gates passed; at least 50 frozen end-to-end test cases; reproducible clean setup; load report with workload and limits; tested tenant isolation; version-compatible rollback; a new operator can follow the runbook. Deliver a five-minute executive demo and fifteen-minute technical defense. Report synthetic results as synthetic and define what a real customer pilot would still need to establish.

## Review rubric

For every project, the mentor reviews mechanism, correctness, failure behavior, system design, evaluation and customer communication. Each is Not yet, Partial or Pass. All must pass. Review the smallest failing assumption first, issue a bounded hint and use changed inputs for the retry. Full implementations and live quiz answers are never supplied before your independent attempt.
