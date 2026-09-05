export const phases = [
  { title: '01 / Foundations', weeks: 'Weeks 1-4', items: [
    ['01-discovery', 'Customer discovery', 1],
    ['02-ai-foundations', 'AI and model foundations', 1],
    ['03-python', 'Production Python', 2],
    ['04-data-apis', 'SQL, APIs and integration basics', 3],
    ['05-prompting', 'Prompting and output control', 4],
    ['06-visual-prototyping', 'Visual prototyping', 4]
  ]},
  { title: '02 / Retrieval and agents', weeks: 'Weeks 5-10', items: [
    ['07-ingestion', 'Documents, chunks and embeddings', 5],
    ['08-search', 'Vector and hybrid search', 6],
    ['09-rag', 'Grounded, multi-tenant RAG', 7],
    ['10-evals', 'Evaluation and observability', 8],
    ['11-tools-mcp', 'Tool calling and MCP', 9],
    ['12-agents', 'Agent harnesses and workflows', 10]
  ]},
  { title: '03 / Production delivery', weeks: 'Weeks 11-15', items: [
    ['13-finetuning', 'Fine-tuning and adaptation', 11],
    ['14-cloud', 'Cloud, containers and CI/CD', 12],
    ['15-performance', 'Cost, latency and scale', 13],
    ['16-enterprise', 'Enterprise data and identity', 14],
    ['17-security', 'Security and responsible AI', 15],
    ['18-regulated', 'Regulated deployment design', 15]
  ]},
  { title: '04 / Multimodal and fieldwork', weeks: 'Weeks 16-20', items: [
    ['19-voice', 'Voice RAG and realtime systems', 16],
    ['20-video', 'Video and multimodal retrieval', 17],
    ['21-delivery', 'Stakeholders and incidents', 18],
    ['22-verticals', 'Verticals and product judgment', 18],
    ['23-capstone', 'End-to-end deployment', 19],
    ['24-outcomes', 'Outcomes and portfolio defense', 20]
  ]}
];
export const modules = phases.flatMap(p => p.items.map(([id, title, week]) => ({id, title, week, phase: p.title})));
