<script setup>
import { computed, ref } from 'vue';
import { Check, LockKeyhole, RotateCcw } from '@lucide/vue';
import { topicSupport } from '../../topic-support.mjs';
import { questions } from '../../questions.mjs';

const props = defineProps({ module: { type: String, required: true } });
const content = computed(() => topicSupport[props.module]);
const assessment = computed(() => questions.find(q => q.module === props.module));
const selected = ref();
const submitted = ref(false);
const passed = ref(typeof window !== 'undefined' && typeof window.localStorage?.getItem === 'function' && window.localStorage.getItem(`fde-pass-${props.module}`) === 'true');

function submit() {
  submitted.value = true;
  if (selected.value === assessment.value.answer) {
    passed.value = true;
    if (typeof window !== 'undefined' && typeof window.localStorage?.setItem === 'function') window.localStorage.setItem(`fde-pass-${props.module}`, 'true');
  }
}
function retry() { selected.value = undefined; submitted.value = false; }
</script>

<template>
  <section class="topic-support">
    <h2>Topic Q&A</h2>
    <p class="support-intro">Try answering each question before opening its explanation.</p>
    <details v-for="item in content.qa" :key="item.question" class="support-item">
      <summary>{{ item.question }}</summary>
      <p><strong>Answer:</strong> {{ item.answer }}</p>
      <p v-if="item.example"><strong>Example:</strong> {{ item.example }}</p>
    </details>

    <details class="project-helper">
      <summary>Project helper: {{ content.project.title }}</summary>
      <p><strong>Goal:</strong> {{ content.project.goal }}</p>
      <p><strong>Before you start:</strong> {{ content.project.prerequisites }}</p>
      <p><strong>Suggested stack:</strong> {{ content.project.stack }}</p>
      <ol><li v-for="step in content.project.steps" :key="step">{{ step }}</li></ol>
      <p><strong>Hints:</strong> {{ content.project.hints }}</p>
      <p><strong>Submit:</strong> {{ content.project.deliverables }}</p>
      <p class="skeleton-note">Use the repository skeleton and leave implementation bodies for yourself. The helper guides decisions; it does not provide a copy-paste solution.</p>
    </details>

    <div class="module-gate" :class="{ passed }">
      <div class="gate-heading"><LockKeyhole :size="18"/><strong>Module assessment</strong><span v-if="passed">Passed: 100%</span><span v-else>Required: 100%</span></div>
      <p>Choose the best answer. You must score 100% before this module is considered complete. A failed attempt can be retaken.</p>
      <fieldset v-if="!passed || submitted">
        <legend>{{ assessment.question }}</legend>
        <label v-for="(option, index) in assessment.options" :key="option" class="assessment-option">
          <input type="radio" :name="`${props.module}-assessment`" :value="index" v-model="selected" :disabled="submitted" required>
          <span>{{ option }}</span>
        </label>
      </fieldset>
      <button v-if="!submitted && !passed" class="check-button" :disabled="selected === undefined" @click="submit"><Check :size="16"/> Submit test</button>
      <div v-if="submitted && !passed" class="gate-result failed" role="status">Not passed. Review the lesson, then retake the test.</div>
      <button v-if="submitted && !passed" class="check-button" @click="retry"><RotateCcw :size="16"/> Retake test</button>
      <div v-if="passed" class="gate-result passed" role="status">This module is passed at 100%. The mentor still reviews the five required checks and your mini-project before advancing you.</div>
    </div>
  </section>
</template>
