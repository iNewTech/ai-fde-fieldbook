import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { modules } from '../docs/.vitepress/curriculum.mjs';
import { questions } from '../docs/.vitepress/questions.mjs';

export function validateQuestion(question) {
  if (!question.id || !question.module || !question.question || !question.explanation) return false;
  return Array.isArray(question.options) && question.options.length >= 2 &&
    Number.isInteger(question.answer) && question.answer >= 0 && question.answer < question.options.length;
}

export function validateLesson(content) {
  const required = ['## First principles', '## Independent work', '## Required checks', '## Topic Q&A', '## Mini-project', '## Video and reading', '### English', '### Hinglish'];
  const errors = required.filter(heading => !content.includes(heading)).map(heading => `Missing ${heading}`);
  const checks = content.split('## Required checks')[1]?.split('\n## ')[0] ?? '';
  if ([...checks.matchAll(/^\d+\. /gm)].length !== 5) errors.push('Expected five defense checks');
  const references = content.split('## Video and reading')[1]?.split('\n## ')[0] ?? '';
  if (!/Video[^\n]*\]\(https:\/\//.test(references)) errors.push('Missing a video reference link');
  return errors;
}

export async function checkContent(root = fileURLToPath(new URL('..', import.meta.url))) {
  const errors = [];
  const ids = new Set();
  const questionIds = new Set();
  for (const module of modules) {
    if (ids.has(module.id)) errors.push(`Duplicate module ${module.id}`);
    ids.add(module.id);
    if (!Number.isInteger(module.week) || module.week < 1 || module.week > 20) errors.push(`Invalid week for ${module.id}`);
    try {
      const text = await readFile(resolve(root, 'docs/learn', `${module.id}.md`), 'utf8');
      errors.push(...validateLesson(text).map(e => `${module.id}: ${e}`));
    } catch { errors.push(`Missing lesson ${module.id}`); }
    if (questions.filter(q => q.module === module.id).length !== 1) errors.push(`Expected one practice question for ${module.id}`);
  }
  for (const question of questions) {
    if (!validateQuestion(question) || !ids.has(question.module)) errors.push(`Invalid question ${question.id}`);
    if (questionIds.has(question.id)) errors.push(`Duplicate question ${question.id}`);
    questionIds.add(question.id);
  }
  return errors;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const errors = await checkContent();
  if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
  else console.log(`Checked ${modules.length} lessons, bilingual summaries and ${questions.length} practice questions.`);
}
