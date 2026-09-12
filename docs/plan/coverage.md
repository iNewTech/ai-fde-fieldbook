# Syllabus coverage map

References: the user-supplied **AI Forward Deployed Engineering, IIT Delhi CEP** brochure and the user-supplied **FDE Zero-to-Expert Roadmap**. This independent plan reorganizes their skill areas into 24 learning modules over 20 active weeks, adds voice/video work and reserves two retry weeks. It uses the roadmap's one-primary-resource, build-debug-apply loop and cumulative portfolio idea without reproducing or verifying marketing, salary or hiring claims.

**Build** means independent implementation and tests. **Experiment** means a bounded practical comparison. **Review** means a defended design or applicability assessment. These depths are explicit: covering a vendor is not the same as operating it at production scale.

| Brochure skill area | Where | Depth and evidence |
| --- | --- | --- |
| FDE mindset and AI foundations | 01-02 | Review: workflow charter, transformer mental model, model-family comparison |
| Python, async, type safety | 03 | Build: adapter and failure tests |
| FastAPI, Pydantic, Git, structured logging | 03-05, 14 | Build: boundary validation, reviewed changes and reproducible service |
| SQL and enterprise data | 04, 16 | Build: replay-safe ERP-style adapter and lineage |
| No-code/visual prototyping | 06 | Experiment: traced visual flow; private QInsights access is not included |
| Few-shot, reasoning prompting, ReAct, structured outputs | 05, 11-12 | Build/experiment: versioned prompts and controlled action loop |
| RAG I: embeddings, chunking and vector stores | 07-08 | Build: ingestion, Chroma lab and pgvector implementation |
| Pinecone, Qdrant, Weaviate alternatives | 08 | Review: source-checked selection matrix and contract differences |
| Semantic, keyword and hybrid search | 08 | Experiment: labeled retrieval benchmark |
| RAG II: reranking, rewriting, citations, multi-tenancy | 09 | Build: authorization, grounding and regression cases |
| Agent patterns, planner-executor, tools and MCP | 11-12 | Build: bounded tool and stateful workflow |
| LangGraph and CrewAI | 12 | Build one, experiment with the other; compare identical cases |
| RAGAS, DeepEval, golden sets and LLM judges | 10 | Experiment: one framework implementation, comparison of the other, judge calibration |
| LangSmith/Langfuse and debugging | 10, 15 | Build one trace path; review equivalent instrumentation in the other |
| SFT, LoRA, QLoRA and distillation | 13 | Experiment plus mechanism defense; actual adaptation run remains a gate |
| AWS Bedrock, Azure OpenAI and GCP Vertex | 14 | Build one sandbox deployment, review identity/network/model contracts for all three |
| Serving frameworks and inference | 14-15 | Experiment: serving/capacity assessment; local model benchmark where supported |
| Docker, Kubernetes, CI/CD and autoscaling | 14-15 | Build: container service, local Kubernetes/recovery exercise and load evidence |
| Cost, latency, caching, routing and batching | 15 | Experiment: before/after measurements with quality preserved |
| Schemas, lineage, secrets and audit trails | 04, 16 | Build: typed boundary, revocation, drift and deletion tests |
| On-prem/VPC and enterprise integration | 14, 16, 18 | Review plus implemented sandbox boundary |
| OWASP, prompt injection, PII and bias | 17 | Build/experiment: attack suite, mitigation retests and outcome slices |
| SOC 2, HIPAA, DPDP and EU AI Act | 18 | Review: applicability questions, current official sources and owned controls |
| Discovery, PRD, solution design and trade-off communication | 01, 21, system design track | Review: charter, design, scope negotiation and pilot plan |
| Stakeholder alignment, iterations and war rooms | 21 | Exercise: incident simulation and postmortem |
| Vertical playbooks: fraud, tickets, multilingual and healthcare | 22 | Review: six domain scorecards and one deeper bounded domain |
| AI product sense and reusable field patterns | 22 | Review: build/buy/configure and product-feedback memo |
| Demo craft, deployment docs and outcomes | 23-24 | Build/review: deployment evidence, executive demo and handover |
| First tool, production RAG, regulated rebuild and audit | P2, P3, P5 | Independent milestone builds; rebuild and audit combined in P5 |
| Final portfolio deployment | P8 | Build: release, failure drill and independent defense |
| Additional: text-based multi-agent RAG | P4 | Experiment: fixed pipeline vs single agent vs bounded specialists |
| Additional: voice, streaming and interruptions | 19 / P6 | Build: voice RAG with measured interaction behavior |
| Additional: video, frames and timestamps | 20 / P7 | Build: multimodal retrieval and temporal evidence tests |

Foundational math includes vector operations, similarity, probability, precision/recall, loss/overfitting, latency distributions and capacity arithmetic. Research-level derivations and training a frontier model are beyond the FDE scope; no such mastery is implied.
