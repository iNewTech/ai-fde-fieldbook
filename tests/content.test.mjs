import test from 'node:test';
import assert from 'node:assert/strict';
import { checkContent, validateLesson, validateQuestion } from '../scripts/check-content.mjs';
import { questions } from '../docs/.vitepress/questions.mjs';

test('all catalog routes contain lesson content and a valid practice question', async () => {
  assert.deepEqual(await checkContent(), []);
});
test('an invalid answer index cannot silently create unanswerable practice', () => {
  assert.equal(validateQuestion({...questions[0], answer: 99}), false);
  assert.equal(validateQuestion({...questions[0], answer: -1}), false);
  assert.equal(validateQuestion({...questions[0], answer: '1'}), false);
});
test('empty lesson scaffolds cannot be published as complete modules', () => {
  const errors = validateLesson('# Draft');
  assert.ok(errors.includes('Expected five defense checks'));
  assert.ok(errors.includes('Missing a video reference link'));
  assert.ok(errors.includes('Missing ### Hinglish'));
});
