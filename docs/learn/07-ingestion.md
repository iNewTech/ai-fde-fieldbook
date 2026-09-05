# 07. Documents, chunks and embeddings

Week 5 | Prerequisite: 06 | Output: versioned synthetic knowledge corpus

## The enterprise problem

Northstar's return rules live in PDFs, spreadsheets and scanned forms. Some documents supersede others. A customer-specific exception appears under a table heading. Before any retrieval model can help, the system must preserve what the source actually says and who may see it.

## First principles

Ingestion turns source material into searchable units while preserving identity and meaning. A document record needs a stable ID, version, source location, observed time, access metadata and processing status. Keep the original representation where authorized, because extracted text can be wrong. OCR is an interpretation of pixels; a decimal point or table column can disappear.

A chunk is a retrieval unit, not just a token count. It should contain enough context to interpret a claim while remaining focused enough to retrieve. Fixed-length splitting is a baseline. Heading-aware and table-aware splitting can preserve conditions. Overlap may recover a boundary sentence but increases storage and can make evaluation appear stronger through near-duplicates.

An embedding maps content to a vector whose geometry can support similarity search. The query and document vectors must belong to a compatible embedding space. Changing the model may change dimension, normalization and semantic behavior; mixing old and new vectors silently damages retrieval. Version the model and re-index deliberately.

Vector size has operating consequences. For 100,000 chunks, 768 float32 values require roughly 307 million bytes before index and metadata overhead. That arithmetic does not predict total database memory, but it explains why chunk count and dimensions matter. More chunks also mean more parsing, embedding and deletion work.

Data lifecycle is part of correctness. A deleted policy must disappear from indexes, caches and derived artifacts according to the agreed policy. Reprocessing the same source should update the existing logical version or leave it unchanged, not create unbounded duplicates. Quarantine parse failures rather than silently publishing incomplete evidence.

## Trace an example

A PDF section says "Trial customers: returns within 30 days" followed by "Enterprise contract terms override this table." A naive splitter retrieves "returns within 30 days" alone. The answer is linguistically supported by its chunk but wrong in context. Preserve the heading and exception or retrieve a parent section after selecting a smaller child chunk.

## Predict the failure

An OCR error changes 1.5% into 15%. A document is deleted but cached answers survive. Two embedding versions share one index. Explain the earliest point where each defect can be detected.

## Independent work

Create at least twelve original synthetic documents with conflicting versions, a table, an exception, a scanned-page stand-in and two tenants. Define `Document`, `Chunk` and `IngestionReport` interfaces. Implement parsing and chunking independently. Compare two strategies on ten known questions. Keep source spans, hashes, versions and rejection reasons. Add a delete-and-reingest test.

## Required checks

1. Trace a cited answer back to source version and span.
2. Explain when overlap helps and when it creates misleading duplicates.
3. Calculate approximate embedding storage for a changed corpus size.
4. Demonstrate idempotent re-ingestion and deletion propagation.
5. Diagnose missing table context and incompatible embedding spaces.

## Topic Q&A

**Q: Why preserve headings and tables?** A: Their conditions often determine the meaning of a claim. **Q: What happens when an embedding model changes?** A: The vector space may become incompatible, so versioning and re-indexing are required.

## Mini-project

Ingest twelve synthetic policies containing a table, exception, version conflict and deletion. Implement chunk metadata with source spans, hashes, access labels and re-ingestion tests.

## Video and reading

- Video course: [Vector Databases: from Embeddings to Applications](https://www.deeplearning.ai/courses/vector-databases-embeddings-applications). Focus on embedding representation and similarity.
- Original paper: [Retrieval-Augmented Generation](https://arxiv.org/abs/2005.11401). Compare the retriever and generator responsibilities.

## Summary

### English

Retrieval quality begins with faithful ingestion. Preserve context, access metadata and source versions; treat embedding changes and deletion as explicit lifecycle operations.

### Hinglish

Achhi retrieval ka base sahi ingestion hai. Heading, exception, tenant aur version preserve karo. Embedding model badalna ya document delete karna proper pipeline operation hona chahiye.
