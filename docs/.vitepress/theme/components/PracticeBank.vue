<script setup>
import { computed, ref } from 'vue';
import { questions } from '../../questions.mjs';
import { Check, RotateCcw } from '@lucide/vue';

const selectedModule = ref('all');
const answers = ref({});
const submitted = ref({});
const visible = computed(() => questions.filter(q => selectedModule.value === 'all' || q.module === selectedModule.value));
function reset() { answers.value = {}; submitted.value = {}; }
</script>

<template>
  <div class="practice-toolbar">
    <label for="module-filter">Subject</label>
    <select id="module-filter" v-model="selectedModule">
      <option value="all">All subjects</option>
      <option v-for="q in questions" :key="q.id" :value="q.module">{{ q.topic }}</option>
    </select>
    <button class="icon-button" @click="reset" aria-label="Reset practice answers" title="Reset practice answers"><RotateCcw :size="18"/></button>
  </div>
  <p class="practice-count" aria-live="polite">{{ visible.length }} practice questions</p>
  <form v-for="q in visible" :key="q.id" class="practice-question" @submit.prevent="submitted[q.id] = true">
    <span class="question-topic">{{ q.topic }}</span>
    <fieldset>
      <legend>{{ q.question }}</legend>
      <label v-for="(option, index) in q.options" :key="index" class="answer-option">
        <input type="radio" :name="q.id" :value="index" v-model="answers[q.id]" :disabled="submitted[q.id]" required>
        <span>{{ option }}</span>
      </label>
    </fieldset>
    <button class="check-button" type="submit" :disabled="answers[q.id] === undefined || submitted[q.id]"><Check :size="16"/> Check answer</button>
    <div v-if="submitted[q.id]" class="answer-feedback" :class="{ correct: answers[q.id] === q.answer }" role="status">
      <strong>{{ answers[q.id] === q.answer ? 'Correct.' : 'Revisit the decision.' }}</strong> {{ q.explanation }}
      <a :href="`/learn/${q.module}`">Review this lesson</a>
    </div>
  </form>
</template>
