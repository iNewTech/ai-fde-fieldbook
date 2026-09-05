# 01. Customer discovery

Week 1 | Prerequisite: readiness diagnostic | Output: one-page pilot charter

## The enterprise problem

At fictional distributor Northstar Supply, support agents check an IBM i order system, a CRM and policy PDFs to answer delivery questions. The operations head asks for a chatbot. Before selecting a model, find out whether agents are searching slowly, trusting stale data, waiting for approvals or explaining genuine shipping delays. Each cause changes the solution.

## First principles

A workflow is a sequence of decisions and state changes. An FDE improves a measurable part of that sequence. Start from the user, trigger, inputs, decision, action and outcome. Separate a symptom, such as repeated customer calls, from a cause, such as missing shipment events. Interview the person doing the work, the system owner and the business owner; each sees a different failure.

A baseline tells you what improvement means. Suppose 1,200 cases a month require eight minutes of handling each: 160 hours. Reducing handling time to five minutes saves at most 60 gross hours. If 20% need four extra minutes of review, subtract 16 hours. Then subtract operating and maintenance costs before claiming value. These are training assumptions, not measured customer results.

Scope defines an agreement that can be tested. "Answer order questions" is too broad. "Help authenticated support staff draft shipment-status replies using current authorized order data; never alter an order" creates boundaries. State the excluded cases, escalation route, data owner and rollback trigger. A pilot should test the highest-risk assumption with the smallest useful workflow.

## Trace an example

Follow one delayed order from customer email to closure. Record when it arrived, which screens were opened, what was copied, who approved the response and when the shipment state changed. If the agent spends six minutes finding a code description but two minutes writing, retrieval may help. If the agent waits two days for warehouse approval, generating prose faster will barely affect elapsed resolution time.

## Predict the failure

The CTO wants automation, the CISO rejects external data transfer, and the support lead wants citations. Explain which decisions require agreement before a prototype. A typical failure is accepting the sponsor's story without observing representative work, then measuring adoption with logins rather than completed outcomes.

## Independent work

Create `problem`, `users`, `workflow`, `baseline`, `constraints`, `success`, `non_goals`, `data_owners` and `stop_conditions` sections in a one-page charter. Write ten discovery questions. For each, name the person to ask and the technical or scope decision their answer changes. Compare an SQL/dashboard improvement with a RAG assistant. Do not implement a chatbot yet.

## Required checks

1. Distinguish handling time from elapsed resolution time in this workflow.
2. Defend one use case and reject one with explicit evidence.
3. Recalculate net value when review volume doubles.
4. Identify the minimum data access needed and who can authorize it.
5. Negotiate a pilot with a measurable success criterion and stop condition.

Pass requires a specific charter, defensible arithmetic and questions tied to decisions. Vague stakeholder lists or invented measurements need revision.

## Topic Q&A

**Q: Why interview the person doing the work?** A: They reveal the actual steps, workarounds and bottlenecks hidden by executive summaries. **Q: What makes a pilot measurable?** A: A baseline, bounded workflow, target outcome and stop condition.

## Mini-project

Interview yourself as three stakeholders for a fictional order-delay workflow. Produce a one-page problem charter, baseline calculation, workflow map and five risks. Do not choose a model until you can name the bottleneck.

## Video and reading

- Video lecture: [ML Teams and Project Management, Full Stack Deep Learning](https://fullstackdeeplearning.com/course/2022/lecture-8-teams-and-pm/). Focus on project selection and organizational ownership.
- Primary role reference: [OpenAI FDE responsibilities](https://openai.com/careers/forward-deployed-engineer-%28fde%29-sf-san-francisco/).

## Summary

### English

Discover the workflow before choosing technology. Establish a baseline, identify the real bottleneck and define a bounded pilot whose outcome can be measured.

### Hinglish

Pehle samjho user ka kaam kahan atakta hai. Baseline nikalo, asli bottleneck pakdo, aur chhota pilot define karo jiska result measure ho sake. Sirf chatbot bana dena success nahi hai.
