# 16. Enterprise data and identity

Week 14 | Prerequisite: 15 | Output: identity-aware integration design

## The enterprise problem

A customer uses SSO, different business-unit permissions and private ERP connectivity. Staff change roles, documents expire and auditors need to reconstruct who accessed which record.

## First principles

Authentication establishes identity; authorization decides what that identity may do. An SSO login does not automatically grant every downstream permission. Map identity claims into application policy, apply least privilege to service credentials and define how role changes invalidate access and cached results. Distinguish a user's authority from a background ingestion service's authority.

Data lineage connects an answer to the source record, extraction step, transformation, index version and access decision. An audit trail records accountable events; a debug log helps diagnosis. They may differ in retention, immutability and readership. Logging every raw prompt can increase exposure without improving either goal.

Schema evolution requires explicit compatibility. Adding an optional field differs from changing a state code's meaning. A connector should surface unknown states instead of silently treating them as success. Reconcile snapshots against event-derived state to detect missed updates. Use source-supported mechanisms for IBM i integration and preserve the existing system of record.

Private networking narrows routes but does not replace authorization. Understand public endpoints, VPC/private endpoints, egress controls and on-prem connectivity. Secrets belong in a managed runtime mechanism with rotation and revocation; they should not travel inside model context.

## Trace an example

A staff member moves from tenant A support to tenant B support. Their session still has an old role and a semantic cache contains A's contract answer. Trace session expiry, policy refresh and cache eligibility. Revoking a UI menu is insufficient if the API still accepts the stale authority.

## Independent work

Draw identity and data flows from browser to service, retrieval store, model provider and ERP adapter. Implement a role-revocation and stale-cache test using synthetic identities. Simulate a new source-state code, a missed event and a deleted policy. Write the lineage fields and audit events required to reconstruct one response.

## Required checks

1. Separate authentication, authorization and service identity.
2. Demonstrate role-change behavior across API, retrieval and cache.
3. Reconstruct an answer's source and transformation lineage.
4. Detect schema drift and reconcile missed source events.
5. Defend public, private and on-prem connectivity boundaries.

## Video and reading

- Video lecture: [FSDL Data Management](https://fullstackdeeplearning.com/course/2022/lecture-4-data-management/).
- Primary reading: [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) and [OpenID Connect](https://openid.net/developers/how-connect-works/).

## Summary

### English

Enterprise integration must preserve identity, source meaning and accountable access across every derived system, including caches and traces.

### Hinglish

Enterprise integration mein login ke baad bhi har layer par permission chahiye. Source ka meaning, lineage aur revoked access caches aur traces tak consistently handle karo.
