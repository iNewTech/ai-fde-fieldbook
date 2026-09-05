# 09. Grounded, multi-tenant RAG

Week 7 | Prerequisite: 08 | Output: authorized answers with verifiable citations

## The enterprise problem

Two business customers have different return agreements. They ask the same question. An assistant must retrieve the correct current contract, explain it, and refuse when the evidence is insufficient. Similar wording must never merge customer permissions.

## First principles

RAG augments generation with retrieved evidence. Its stages have separate responsibilities: authorize the request, retrieve candidates, optionally rerank, build bounded context, generate an answer, then validate support and citations. You can debug each stage instead of treating the whole system as a mysterious prompt.

Query rewriting can translate an ambiguous question into a better retrieval query. It can also invent constraints or remove exact identifiers. Preserve the original question and compare retrieved candidates before and after rewriting. Reranking improves the ordering of candidates already found; it cannot reliably recover evidence absent from the candidate set.

Context construction is a selection problem. Include enough evidence to answer, preserve source metadata and avoid conflicting versions. More context increases cost and can distract the generator. Decide whether contradictions should trigger a refusal, a clarification or an explicit explanation of the conflict. A low similarity score alone is not a universally valid refusal threshold; calibrate behavior with labeled cases.

Authorization belongs in the application and storage path. Derive tenant and role from authenticated identity, not a model-supplied field. Enforce restrictions before protected content enters results, model context, traces or caches. Revalidate access for source links and tool calls. Tenant isolation is an invariant even when answer quality is poor.

Citations are evidence claims. A URL that exists is not enough: the cited passage must support the nearby claim, the version must be appropriate, and the user must be able to access it. A claim may combine several sources; preserve that relationship. An answer without support should abstain or ask a targeted clarification rather than invent a passage.

## Trace an example

Tenant A's contract permits returns within 14 days; tenant B's permits 30. A support user from A asks about a 20-day-old order. A global cache returns B's previous answer. The retriever may be correct on a fresh call, yet the system still leaks policy information and makes a false promise. Include tenant, permission context and source version in cache eligibility.

## Predict the failure

The right passage was retrieved but omitted during context packing. A citation points to an old version. A model faithfully repeats an instruction embedded in a retrieved document. Identify the responsible stage and its regression test.

## Independent work

Implement P3's answer interface from its skeleton. Return answer status, supported claims, source IDs and source versions. Include conflicting policies, missing evidence, deleted documents, cross-tenant attempts and a rewritten query that drops a product code. Trace one successful request and three failures through every stage. Keep a fixed-pipeline baseline before adding agents.

## Required checks

1. Separate retrieval, context-construction and generation failures in a trace.
2. Demonstrate tenant isolation across retrieval, source links and cache hits.
3. Verify citation support at the claim level.
4. Defend refusal and clarification behavior on missing or conflicting evidence.
5. Measure whether rewriting and reranking improve the held-out task.

<TopicSupport module="09-rag" />

## Video and reading

- Video lecture: [FSDL Augmented Language Models](https://fullstackdeeplearning.com/llm-bootcamp/spring-2023/augmented-language-models/). Focus on external knowledge and its boundaries.
- Original paper: [Retrieval-Augmented Generation](https://arxiv.org/abs/2005.11401). Compare its formulation with this application's explicit authorization and citation requirements.

## Summary

### English

Grounding is an end-to-end property. Correct retrieval, tenant isolation, context selection, supported claims and source-version handling must all work together.

### Hinglish

Sirf relevant chunk milna enough nahi. Sahi tenant, current source, selected context aur claim-supporting citation sab sahi hone chahiye; evidence na ho to clarify ya abstain karo.
