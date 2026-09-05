# 23. End-to-end deployment capstone

Week 19 | Prerequisite: 22 and all earlier gates | Output: P8 release candidate

## The enterprise problem

Northstar wants a bounded order-exception assistant for support staff: current authorized order facts, relevant policy citations and a reviewable draft. Your prior projects contain pieces of this workflow. Now make them operate as one coherent service.

## First principles

End-to-end ownership means the user outcome and every dependency are accounted for. Start with a one-page scope and a system context diagram. Trace a request through identity, API, retrieval, model, tool and user review. State where truth lives, where state persists and who owns recovery.

An architecture is a set of decisions under constraints. Estimate volume, corpus growth, latency and data freshness before selecting component boundaries. Separate read paths from side effects. Use an explicit state machine for review and action. Describe what happens when each dependency is slow, unavailable or returns invalid data.

Release evidence should be reproducible. Tie code, prompt, model configuration, schema, index and evaluation dataset versions to the candidate. Acceptance includes functional tests, isolation, performance, recovery and user workflow review. A clean happy-path demo does not substitute for a failed critical check.

The capstone reuses earlier work to fit the study budget. Integrate one primary workflow deeply. Voice and video remain separately assessed projects unless they improve this customer's task enough to justify inclusion. Unnecessary features consume the time needed to verify the core service.

## Trace an example

An upstream ERP timeout occurs after retrieval succeeds. The service must distinguish policy evidence from current order truth. It may draft general guidance with an explicit limitation, but it cannot assert a shipment status it did not confirm. The decision must appear consistently in the API, UI, trace and customer runbook.

## Independent work

Produce the P8 charter, architecture, threat model, interface contracts, evaluation report, load report and release checklist. Deploy to a sandbox, run an unfamiliar failure drill and exercise rollback. Invite a reviewer to change one constraint, such as a tenfold workload or a new tenant boundary, and defend your response before adding code.

## Required checks

1. Trace the workflow and every trust boundary without omissions.
2. Justify component choices using stated constraints and alternatives.
3. Pass all earlier practical gates and capstone acceptance tests.
4. Demonstrate recovery with consistent application and data versions.
5. Defend the design under an unfamiliar changed constraint.

<TopicSupport module="23-capstone" />

## Video and reading

- Video walkthrough: [FSDL Project Walkthrough: askFSDL](https://fullstackdeeplearning.com/llm-bootcamp/spring-2023/askfsdl-walkthrough/). Analyze deployment boundaries; do not copy the exercise implementation.
- Primary reading: [Google SRE, Launch Checklist](https://sre.google/sre-book/launch-checklist/).

## Summary

### English

The capstone joins discovery, implementation and operations into one defensible customer workflow. Release only when the complete system has evidence, including failure and recovery.

### Hinglish

Capstone mein alag demos ko ek reliable customer workflow banana hai. Design, tests, permissions aur recovery ka evidence ho tabhi release gate pass hoga.
