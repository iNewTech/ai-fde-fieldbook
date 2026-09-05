# 04. SQL, APIs and enterprise boundaries

Week 3 | Prerequisite: 03 | Output: replay-safe, read-only ERP integration

## The enterprise problem

Northstar's IBM i system holds order truth, but the AI service runs outside it. Orders are updated through established RPGLE workflows. You need to expose the minimum useful information while preserving transactional meaning, access controls and system capacity.

## First principles

Treat an API as a behavioral contract: request shape, identity, authorization, freshness, side effects and failure semantics. A JSON schema alone is insufficient. `order_status` may describe a snapshot taken five minutes ago; an AI answer must not imply it is live. Include a source version or observation time and clarify what each state means.

Your SQL experience transfers directly, but language models create new entry points. Do not concatenate generated SQL into privileged execution. Prefer named parameterized queries and allowlisted read-only operations. Join cardinality still matters: joining orders to multiple shipments can multiply invoice totals. Query plans and indexes determine whether an apparently small assistant request scans a critical operational table.

Event delivery and business effects are different. A source can deliver the same event multiple times. Idempotency means repeated application with the same business identity has the same intended effect. Persist deduplication with the effect or durable outcome in an atomic boundary. An in-memory seen-ID list loses its guarantee after restart and cannot coordinate workers.

Out-of-order updates need a source version rule. A late "packed" event must not overwrite a newer "shipped" event. For incremental ingestion, a timestamp-only cursor may miss rows sharing a timestamp or fail across clock changes. Prefer the source's supported change mechanism, or use a stable compound cursor and reconciliation process. Assess journaling or CDC options against the customer's actual IBM i setup rather than assuming access.

## Trace an example

Event E17 sets order O42 to shipped at source version 12. It is processed, but the response is lost. The sender retries E17, then delayed event E16 arrives with version 11. Your system must acknowledge the repeated E17 without a second effect and reject or ignore the stale transition from E16. Record enough audit evidence to distinguish a repeat from a new event with conflicting data.

## Predict the failure

An API retry creates two refunds; a stale read is presented as current; a service account can read every tenant. These are integration defects even if the model behaves perfectly. Include encoding, time zones and decimal precision in cross-system contracts.

## Independent work

Define a read-only `OrderGateway` interface and an event envelope containing source, event ID, entity ID, version and observation time. Use synthetic fixtures. Write tests for duplicate delivery, out-of-order versions, deleted records, forbidden tenants and a source outage. Produce an architecture decision record explaining whether polling, events or a direct read is appropriate.

## Required checks

1. Explain why idempotency needs a durable atomic boundary.
2. Trace duplicate and out-of-order events without corrupting state.
3. Demonstrate parameterization and a least-privilege query boundary.
4. Diagnose a join that doubles totals and inspect its plan.
5. Defend freshness, encoding, decimal and time-zone contracts.

## Topic Q&A

**Q: What does idempotency protect?** A: It prevents repeated delivery from creating repeated business effects. **Q: Why is a JSON schema insufficient?** A: It does not define identity, authorization, freshness or side-effect behavior.

## Mini-project

Design a read-only order API and replay-safe event consumer using synthetic data. Add tests for duplicate events, stale versions, source outage and tenant authorization.

## Video and reading

- Video lecture: [FSDL Data Management](https://fullstackdeeplearning.com/course/2022/lecture-4-data-management/). Focus on data ownership, versioning and pipeline boundaries.
- Primary reading: [PostgreSQL transaction isolation](https://www.postgresql.org/docs/current/transaction-iso.html) and [IBM i documentation](https://www.ibm.com/docs/en/i). Consult the version matching the customer's system.

## Summary

### English

An AI integration inherits every data and transaction risk of the underlying system. Keep explicit contracts for identity, freshness, repeated delivery and authorized effects.

### Hinglish

AI layer lagane se ERP ke transaction rules change nahi hote. Identity, freshness, duplicate events aur permissions ka contract clear rakho; model ko unrestricted database access mat do.
