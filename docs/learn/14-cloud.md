# 14. Cloud, containers and CI/CD

Week 12 | Prerequisite: 13 | Output: sandbox deployment and recovery drill

## The enterprise problem

A service works on your laptop. The customer needs repeatable releases, private data access, monitoring and an accountable operator when a dependency fails.

## First principles

A container packages a process and its dependencies; it does not provide durability, authorization or a service-level guarantee. Separate application image, configuration, secrets and persistent data. Build an immutable artifact, test it once, and promote that artifact through environments. CI runs checks; deployment automation changes an environment and needs a recovery path.

Liveness asks whether a process should be restarted. Readiness asks whether it can accept work. A functional smoke test checks a representative behavior such as retrieving the expected index version. Do not make a transient downstream failure trigger an endless restart storm.

Kubernetes schedules workloads and reconciles desired state. Learn deployments, services, configuration, secrets, probes, resource requests and limits. Replicas improve availability only if dependencies and capacity permit it. A managed container service can be sufficient for a small pilot; demonstrate Kubernetes locally and explain when its operational burden is justified.

Managed model APIs and self-hosted serving have different ownership boundaries. Compare AWS Bedrock, Azure OpenAI and GCP Vertex AI for identity, networking, model availability, quotas and operational responsibility using current official documentation. Choose one cloud for a real sandbox deployment. Explore serving frameworks such as vLLM conceptually and benchmark a small supported model when resources allow.

## Trace an example

Release B changes chunk metadata. Rolling the application back to A may fail if A cannot read the new index. Version application, prompt, model configuration, schema and index together; rehearse compatible rollback or forward recovery.

## Independent work

Containerize your service, add CI, deploy it to one sandbox and run a local Kubernetes exercise. Test readiness, a killed process, missing configuration and an unavailable dependency. Record an actual rollback, cost boundary and teardown procedure. Never put credentials in the image or repository.

## Required checks

1. Reproduce the same release from a clean checkout.
2. Explain process, container, orchestration and persistence boundaries.
3. Distinguish liveness, readiness and functional verification.
4. Demonstrate deployment and rollback with compatible data/index versions.
5. Defend one cloud choice and compare the other two accurately.

## Video and reading

- Video lecture: [FSDL Deployment](https://fullstackdeeplearning.com/course/2022/lecture-5-deployment/).
- Primary reading: [Kubernetes concepts](https://kubernetes.io/docs/concepts/), [Docker getting started](https://docs.docker.com/get-started/), [vLLM docs](https://docs.vllm.ai/).

## Summary

### English

Deployments need repeatable artifacts, explicit ownership and tested recovery. Container health alone does not prove application correctness.

### Hinglish

Deployment mein repeatable build, clear ownership aur tested rollback chahiye. Container running hai iska matlab answer aur data bhi sahi hain, aisa nahi.
