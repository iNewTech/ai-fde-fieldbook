# 21. Stakeholders, delivery and incidents

Week 18 | Prerequisite: 20 | Output: pilot plan and incident drill

## The enterprise problem

The sponsor requests an extra workflow two days before launch. Security has an unresolved concern, and an upstream dependency begins timing out during the pilot.

## First principles

A PRD states the user problem, outcome, scope and acceptance criteria. A solution design explains components, data flow, alternatives and operational behavior. They should agree on what is being delivered. An architecture decision record preserves why one option was chosen and what evidence would change the decision.

Map stakeholders to decisions rather than merely job titles. The business owner accepts workflow outcomes; engineering owns integration; security reviews the data boundary; operations owns incident response. A single person may hold several roles, but no critical responsibility should remain implicit.

Scope change consumes capacity or moves risk. Present concrete alternatives: defer the new workflow, reduce a named feature, or move the date. State the effect on tests and readiness rather than promising everything. Maintain an issue log with owners and next decision dates.

During an incident, establish impact, mitigate, coordinate and communicate. A useful update states known facts, affected users, current action, owner and next update time. Separate a confirmed cause from a hypothesis. After recovery, examine contributing system conditions and improve tests, runbooks or architecture.

## Trace an example

Order lookup fails but policy retrieval still works. A fallback can answer general policy while stating that current order status is unavailable. It must not substitute a stale status without disclosure. The incident commander decides whether that degraded mode meets the agreed service boundary.

## Independent work

Write a pilot plan with a staged rollout and rollback trigger. Role-play a sponsor, CISO and support lead with conflicting constraints. Negotiate one scope change. Run a 30-minute simulated outage, send factual updates in the exercise record and write a blameless postmortem with owned corrective actions.

## Required checks

1. Align a PRD, solution design and acceptance criteria.
2. Assign owners to launch and risk decisions.
3. Negotiate scope using explicit delivery trade-offs.
4. Demonstrate useful degraded behavior and incident communication.
5. Convert the incident into specific, testable follow-up work.

<TopicSupport module="21-delivery" />

## Video and reading

- Video lecture: [FSDL ML Teams and Project Management](https://fullstackdeeplearning.com/course/2022/lecture-8-teams-and-pm/).
- Primary reading: [Google SRE, Managing Incidents](https://sre.google/sre-book/managing-incidents/).

## Summary

### English

Delivery requires shared acceptance criteria, explicit decision owners and honest communication under uncertainty. Scope and incident handling are engineering responsibilities.

### Hinglish

Delivery mein code ke saath owners, scope aur acceptance clear hone chahiye. Incident mein facts aur next update do; bina evidence recovery time promise mat karo.
