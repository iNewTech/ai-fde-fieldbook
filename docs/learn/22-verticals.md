# 22. Verticals and product judgment

Week 18 | Prerequisite: 21 | Output: domain scorecard and reuse memo

## The enterprise problem

After one successful support pilot, three customers request similar systems. Their workflows look alike, but their data sensitivity, error costs and integrations differ.

## First principles

A vertical playbook captures recurring workflows, stakeholders, data boundaries and failure costs in a domain. It should guide discovery rather than replace it. Ticket routing, fraud review, administrative healthcare policy, manufacturing maintenance, retail returns and multilingual logistics all have different definitions of a useful error trade-off.

Compare expected benefit with integration effort, data availability, review burden and downside of mistakes. Fraud detection may require high recall with manageable investigation volume; ticket routing may tolerate a reversible misroute. A healthcare policy prototype must not silently become a clinical advice system. The decision about autonomy follows the consequences and evidence.

Product sense identifies which repeated field needs belong in a common product, a configurable connector or a customer-specific implementation. Reuse stable interfaces and measured workflows; preserve explicit policy variation. Copying a hardcoded customer permission rule into a shared connector creates a cross-customer defect.

Build-versus-buy includes licensing, switching cost, operating responsibility, data export and custom requirements. A reusable feature still needs an owner, tests and maintenance capacity. Escalate patterns to product teams with examples, frequency, impact and the workarounds customers currently need.

## Trace an example

Three customers all need order status. Their source adapters differ, but the normalized status contract is stable. Reuse the contract, tests and observability. Keep tenant policy and source-specific mapping explicit. If one customer's state cannot map cleanly, represent uncertainty instead of forcing an incorrect universal enum.

## Independent work

Write a six-row vertical scorecard for the domains above. For each, identify user, workflow, non-AI baseline, data source, serious failure and measurable outcome. Deepen one domain using your own work experience. Write a two-page product-feedback memo separating reusable behavior from customer-specific policy. Keep startup ideas as a later research list.

## Required checks

1. Compare error costs in at least three domains.
2. Reject an AI use case with a defensible simpler alternative.
3. Identify reusable behavior without merging access policies.
4. Defend a build, buy or configure decision with lifecycle costs.
5. Write product feedback grounded in repeatable customer evidence.

<TopicSupport module="22-verticals" />

## Video and reading

- Video lecture: [FSDL Course Vision and When to Use ML](https://fullstackdeeplearning.com/course/2022/lecture-1-course-vision-and-when-to-use-ml/).
- Primary reading: [Google Rules of Machine Learning](https://developers.google.com/machine-learning/guides/rules-of-ml).

## Summary

### English

Transfer engineering principles across domains while respecting different consequences and workflows. Reuse stable behavior only when customer evidence supports it.

### Hinglish

Har industry mein same AI solution fit nahi hota. Error ka cost aur workflow samjho; jo behavior sach mein common hai usko reuse karo, policies ko mix mat karo.
