# Your 22-week study plan

**20 active weeks, 2 buffer weeks, 15 hours per week: 330 hours reserved.** Weeks begin when you explicitly start, not when this website is deployed. The site is a library; chat is where your mentor teaches, reviews and gates progress.

This route works for beginners and experienced engineers. Use your existing
programming, API, SQL or operations experience as a bridge, but complete the
diagnostic before skipping anything. Established skills still receive a check;
saved repetition time goes toward AI reasoning and failure analysis.

## What the time includes

The 300 active-study hours include reading, selected video sections, coding, experiments, reviews and projects. Projects extend the same enterprise case wherever practical; they are not eight unrelated full products. The final 30 hours are reserved for retries and delayed recall. Extra foundation work or failed gates can extend the calendar. A broad syllabus cannot guarantee mastery on a fixed deadline.

Every active week allocates approximately **3 hours of explanation/video, 7 hours of implementation or experiments, 2 hours of tests, 2 hours of customer-facing writing, and 1 hour of recall/review**. The delivery work is woven into the labs as well. Video is a reference, not an additional obligation to watch every linked course in full.

Every topic page now has three visible practice layers: answered **Topic Q&A** for immediate concept clarification, an independent **Mini-project** for that topic, and five unanswered **Required checks** for mentor review. After each milestone, the accumulated mini-projects are integrated into a major project; see the [milestone map](/projects/).

## The concept spine

The zero-to-expert roadmap adds a simple rule for every topic: learn one
primary resource, build a tiny example, add the capability to the evolving
portfolio system, deliberately break it, debug it, then take the mastery gate.
Do not study every framework at once. Learn the underlying sequence first:

| Concept | Fieldbook modules | Portfolio capability |
| --- | --- | --- |
| LLMs and prompting | 02, 05 | Explain model limits and produce controlled drafts |
| LLM application basics | 04-06 | Connect a model to data, validation and a user workflow |
| Embeddings and vector databases | 07-08 | Index authorized enterprise documents and retrieve candidates |
| RAG | 09-10 | Return grounded answers with citations and measured quality |
| Tool calling | 11 | Request a bounded read-only business lookup |
| State and orchestration | 12 | Route work, retry safely and pause for human approval |
| Agents and MCP | 11-12 | Compare agents with a simpler workflow and expose a controlled capability |
| Evals, observability and safety | 10, 17-18 | Detect regressions, attacks, leakage and operational risk |
| Production FDE delivery | 14-16, 19-24 | Deploy, operate, communicate outcomes and improve the system |

The portfolio is one evolving enterprise workflow platform, not twenty
unrelated demos. Topic labs isolate one skill; milestone projects integrate
those skills into the same system and add evidence, tests and design defenses.

## Your weekly rhythm

| Day | Time | Work |
| --- | --- | --- |
| Monday | 1h | 15m closed-book recall; 30m text lesson; 15m predict an example |
| Tuesday | 1h | 30m targeted video; 30m compare its explanation with your own |
| Wednesday | 1h | Write the design and data contract; identify the first failure test |
| Thursday | 1h | Implement a small vertical slice; record questions for the mentor |
| Friday | 1h | Test an edge case; explain one trade-off without notes |
| Saturday | 5h | Three focused build blocks with breaks; run the experiment and keep evidence |
| Sunday | 5h | Complete tests and delivery artifact; defend work; do targeted remediation |

The five-hour weekend budget includes breaks. Move reading into a weekend block when a topic needs more explanation. Revisit each module roughly 1, 3, 7 and 21 days after first study; these intervals are a practical starting schedule, not a universal optimum.

## The work, week by week

In this table M/T/W/Th/F correspond to the one-hour weekday slots. Saturday and Sunday carry the extended implementation and review work.

| Week | Modules | Weekdays: M / T / W / Th / F | Weekend evidence |
| --- | --- | --- | --- |
| 1 | [01 Discovery](/learn/01-discovery), [02 AI foundations](/learn/02-ai-foundations) | Workflow interview / tokens and transformers / AI vs rules decision / baseline arithmetic / stakeholder questions | One-page charter, ten discovery questions with decisions, model mental-model defense |
| 2 | [03 Python](/learn/03-python) | JS-to-Python types / exceptions and contexts / async and cancellation / Pydantic boundary / tests | Typed adapter, timeouts, concurrency tests; **P1 Python bridge** |
| 3 | [04 Data and APIs](/learn/04-data-apis) | Db2-to-service boundary / schema drift / deduplication / API contract / Git review | Read-only ERP adapter, replay-safe events, schema and integration tests |
| 4 | [05 Prompting](/learn/05-prompting), [06 Visual prototypes](/learn/06-visual-prototyping) | Task contract / few-shot / structured output / visual flow / counterexamples | First AI triage tool, frozen eval cases and one-pager; **P2 First AI tool** |
| 5 | [07 Ingestion](/learn/07-ingestion) | Document inventory / parsing and OCR / chunks / embeddings math / lineage | Synthetic corpus ingestion with preserved headings, tables, versions and deletion plan |
| 6 | [08 Search](/learn/08-search) | Lexical baseline / cosine and ANN / vector stores / hybrid fusion / retrieval metrics | Chroma-to-pgvector comparison; relevance labels and search error analysis |
| 7 | [09 RAG](/learn/09-rag) | Context construction / reranking / query rewriting / tenant isolation / citations | Grounded answers, refusal cases, tenant and freshness tests |
| 8 | [10 Evals](/learn/10-evals) | Golden set / retrieval vs answer metrics / judge calibration / tracing / regression gates | At least 40 held-out cases, evaluation report, architecture review; **P3 Enterprise RAG** |
| 9 | [11 Tools and MCP](/learn/11-tools-mcp) | Tool schemas / runtime authorization / retries / MCP client-server / threat boundaries | Read-only order tool and a local MCP adapter; denied-action and timeout traces |
| 10 | [12 Agents](/learn/12-agents) | State machines / serial and parallel / LangGraph / CrewAI comparison / human approval | Compare fixed pipeline, one agent and two specialists; **P4 Controlled workflow** |
| 11 | [13 Fine-tuning](/learn/13-finetuning) | Prompt vs RAG vs tuning / ML math and splits / SFT / LoRA and QLoRA / distillation | Small adaptation experiment or provided training-trace analysis, held-out evaluation and cost decision |
| 12 | [14 Cloud](/learn/14-cloud) | Docker / CI/CD / one cloud / Kubernetes / serving and rollback | Deploy one sandbox service; compare AWS, Azure and GCP contracts; rollback drill |
| 13 | [15 Performance](/learn/15-performance) | Token economics / latency decomposition / cache isolation / routing and batching / load test | Baseline vs optimized p50/p95, cost and quality; tracing dashboard and load report |
| 14 | [16 Enterprise](/learn/16-enterprise) | SSO and RBAC / secrets / schema evolution / lineage and audit / private connectivity | Identity-aware integration, replay/deletion drills, deployment boundary diagram |
| 15 | [17 Security](/learn/17-security), [18 Regulated](/learn/18-regulated) | Injection / PII and bias / attack tests / data-flow review / risk ownership | Regulated redesign and audit with remediation evidence; **P5 Regulated rebuild and audit** |
| 16 | [19 Voice](/learn/19-voice) | Audio pipeline / VAD and turns / streaming / interruption / voice tool confirmation | Ten recorded synthetic sessions, turn/latency tests and text fallback; **P6 Voice service desk** |
| 17 | [20 Video](/learn/20-video) | Transcript and frames / OCR / timestamps / multimodal retrieval / temporal evaluation | Own short demonstration clip, supported timestamped answers; **P7 Video field manual** |
| 18 | [21 Delivery](/learn/21-delivery), [22 Verticals](/learn/22-verticals) | PRD and stakeholder map / change negotiation / incident drill / six domain cases / reuse decision | Pilot plan, incident update, vertical scorecard and product-feedback memo |
| 19 | [23 Capstone](/learn/23-capstone) | Scope freeze / system design / end-to-end slice / threat model / release review | Assemble existing work into a bounded customer deployment; **P8 Capstone, part 1** |
| 20 | [24 Outcomes](/learn/24-outcomes) | Rollout evidence / adoption and ROI / executive narrative / portfolio / mock interview | Demo, runbook, measured results, rollback evidence and independent defense; **P8 part 2** |
| 21 | Remediation | Weakest conceptual checks and failed practical cases | Fresh tests; repeat affected gates without changing their acceptance criteria |
| 22 | Retention and defense | Mixed-domain questions, unfamiliar incident, customer role-play | Final readiness review and a clear list of any remaining gaps |

## Your default stack

Use **Python and FastAPI** for the AI service; **Node.js/TypeScript** where an
adapter or UI benefits from it; **PostgreSQL with pgvector** for the main
learning deployment; **Chroma** for a small comparison lab; and **Docker** for
packaging. Customer systems are represented with synthetic CRM, ERP, ticketing,
document and analytics fixtures, never live employer data.

Learn one cloud deployment deeply. AWS Bedrock, Azure OpenAI and Google Vertex AI all receive a comparison and architecture exercise. Kubernetes receives a local deployment/recovery exercise. Learn LangGraph through a bounded workflow, then contrast CrewAI with a small equivalent experiment. Pinecone, Qdrant and Weaviate receive selection/contract checks; operating every vendor at production scale is beyond this schedule. No competency is silently removed: depth is explicit in the [coverage map](/plan/coverage).

Framework rule: do not spend the early weeks collecting LangChain, LangGraph,
CrewAI, AutoGen, LlamaIndex, Semantic Kernel and other framework APIs. First
understand the model, retrieval, tools, state, agents, orchestration, MCP,
evaluation and production concepts. A later framework should then be an API
translation exercise, not a new mental model.

## Readiness is evidence

System design has [nine explicit review checkpoints](/plan/system-design), covering capacity, data contracts, consistency, trust boundaries, queues and recovery.

To finish, you must independently explain each core concept; implement and debug the required exercises; defend trade-offs against a changed constraint; pass every required check; and operate the capstone through a failure and recovery drill. Unknown answers are recorded as gaps. No average score cancels a failed critical check.

The startup track comes later. For now, keep a private list of repeated enterprise pains you observe, without turning this study plan into a business launch project.
