# 18. Regulated deployment design

Week 15 | Prerequisite: 17 | Output: P5 redesign, risk register and governance plan

## The enterprise problem

A bank or hospital wants the prototype deployed in its environment. The customer has contractual, data-location, privacy, retention and review requirements that the demo never addressed.

## First principles

Translate each requirement into a data flow, control, owner and piece of evidence. A vendor's certification or product label does not establish that your application meets a customer's obligations. Distinguish laws, contractual commitments, organizational policies and assurance reports. Ask the accountable customer specialists to resolve applicability.

SOC 2 concerns an organization's controls within a defined examination scope; it is not a blanket product authorization. HIPAA, India's DPDP framework and the EU AI Act have different purposes, jurisdictions, roles and applicability conditions. Learn to identify questions and engineering consequences. Verify current official rules when working a case; do not infer legal status from a static tutorial.

A risk register connects a failure to impact, likelihood assumptions, controls, owner and acceptance decision. Name residual risk after mitigation. For a synthetic hospital policy assistant, retrieval mistakes may be handled by restricting it to administrative policy and requiring source review. Do not present that prototype as a clinical decision system.

Deployment boundaries include on-prem components, private networking, model endpoints, logs, backups and support access. Data residency is about the actual flows and agreements, not just the region selected for the main database. Recovery plans must preserve both service availability and the promised access/retention controls.

## Trace an example

The database is in an approved region, but error traces copy raw records to another service. The architecture diagram omitted telemetry, so the review missed the transfer. Add every destination, owner and retention policy before calling the data map complete.

## Independent work

Rebuild your P3 architecture for one fictional regulated customer. Supply a data-flow diagram, risk register, deployment options, deletion drill and approval matrix. Name which assertions require current legal or customer confirmation. Implement at least two controls and test them. Combine this with the P5 audit; a document-only compliance claim is not a passed practical exercise.

## Required checks

1. Distinguish policy, law, contract and assurance evidence.
2. Trace data through model calls, telemetry, caches and backups.
3. Convert three requirements into owned, testable controls.
4. Demonstrate implemented controls and a deletion/revocation drill.
5. Present residual risks and identify the accountable acceptance owner.

## Topic Q&A

**Q: Does a vendor certification prove your deployment is compliant?** A: No; applicability, data flow, controls and accountable review still matter. **Q: What belongs in a risk register?** A: Failure, impact, control, owner, evidence and residual risk.

## Mini-project

Choose a fictional bank or administrative hospital case. Convert three requirements into owned controls, draw all data destinations and run a deletion or access-revocation drill.

## Video and reading

- Video lecture: [FSDL Ethics](https://fullstackdeeplearning.com/course/2022/lecture-9-ethics/), focusing on deployment consequences.
- Official references: [HHS HIPAA](https://www.hhs.gov/hipaa/index.html), [MeitY](https://www.meity.gov.in/), [EU AI Act](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai), [AICPA SOC](https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services).

## Summary

### English

Regulated delivery requires context-specific obligations, implemented controls and accountable evidence. Record uncertainty and obtain the right review rather than making blanket compliance claims.

### Hinglish

Regulated customer ke liye actual requirements ko controls aur evidence mein badlo. "Compliant" label se kaam complete nahi hota; applicability aur risk acceptance sahi owner se verify karao.
