# 08. Vector and hybrid search

Week 6 | Prerequisite: 07 | Output: retrieval benchmark and store decision

## The enterprise problem

Agents search for product code XQ-184, "late dispatch" and Hindi-English phrases describing a missing shipment. Exact identifiers and paraphrases are different retrieval problems. One similarity method may not serve them equally well.

## First principles

Lexical retrieval matches terms. A method such as BM25 balances term frequency, rarity and document length. It is often useful for codes, names and exact phrases. Dense retrieval compares learned vectors and can recover meaning despite different words. Neither method inherently knows which document is authoritative or authorized.

Cosine similarity compares vector directions: dot product divided by the product of lengths. For vectors [1,0] and [1,1], cosine is about 0.707. That is a geometric score, not a 70.7% probability of relevance. Approximate nearest-neighbor indexes trade exactness for speed and memory; use an exact baseline on a small corpus to understand what the approximation loses.

Hybrid retrieval combines lexical and dense candidates. Scores from different systems may not share a scale. Reciprocal rank fusion combines positions, often using a term such as 1/(k + rank), then summing across lists. Treat k and candidate counts as experiment parameters. A reranker can evaluate query-document pairs more carefully after candidate retrieval, at an added latency and cost.

Measure retrieval before evaluating final prose. Recall@k asks how many relevant items were found within k results; precision@k asks what fraction of retrieved results were relevant. MRR rewards the first relevant result's rank. Relevance labels should reflect the task, including versions and tenant eligibility. A relevant but forbidden document is not a successful retrieval.

Database selection depends on the existing system, workload, filters, update rate, durability and operations. PostgreSQL with pgvector can simplify a SQL-centered deployment; a dedicated vector service may provide different scaling and management trade-offs. A vendor comparison is useful only when it changes a concrete decision.

## Trace an example

For a question with two relevant passages, the top five results contain one relevant passage. Recall@5 is 1/2; precision@5 is 1/5. If the first relevant passage is at position three, reciprocal rank is 1/3. Increasing k may improve recall while adding irrelevant context and latency downstream.

## Predict the failure

Semantic search retrieves the wrong product with a similar description. An ANN index loses filtered recall. Raw BM25 and cosine scores are added without calibration. Design an experiment that distinguishes the failure rather than changing every parameter at once.

## Independent work

Create 30 labeled queries across exact IDs, paraphrases, ambiguous terms and mixed language. Compare lexical, dense and hybrid retrieval on the same corpus. Implement a small Chroma experiment and the main pgvector path. Write a selection matrix for Pinecone, Qdrant and Weaviate using current primary documentation. Defend one choice with measured retrieval and operational evidence.

## Required checks

1. Compute cosine and explain why it is not a calibrated relevance probability.
2. Compute precision@k, recall@k and MRR from a sample ranking.
3. Show an exact-identifier failure and a hybrid comparison.
4. Explain ANN recall, metadata filtering and update trade-offs.
5. Defend the store choice without relying on a feature-count contest.

<TopicSupport module="08-search" />

## Video and reading

- Video course: [Vector Databases: from Embeddings to Applications](https://www.deeplearning.ai/courses/vector-databases-embeddings-applications). Focus on hybrid and multilingual search.
- Primary reading: [pgvector](https://github.com/pgvector/pgvector), [Chroma documentation](https://docs.trychroma.com/) and [Qdrant concepts](https://qdrant.tech/documentation/concepts/).

## Summary

### English

Match the retrieval method to query behavior. Compare lexical, dense and hybrid search using labeled results and operational constraints before selecting a database.

### Hinglish

Product code aur natural-language question ki search need alag ho sakti hai. Same labeled queries par lexical, vector aur hybrid compare karo; database decision evidence se lo.
