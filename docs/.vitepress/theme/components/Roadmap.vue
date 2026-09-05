<script setup>
import { phases } from '../../curriculum.mjs';
import { ArrowUpRight, BookOpen, Clock3, Hammer } from '@lucide/vue';
</script>

<template>
  <div class="study-facts" aria-label="Curriculum at a glance">
    <div><Clock3 :size="19"/><strong>15 hours</strong><span>each week</span></div>
    <div><BookOpen :size="19"/><strong>24 modules</strong><span>20 study weeks + 2 buffer</span></div>
    <div><Hammer :size="19"/><strong>8 projects</strong><span>build, test, defend</span></div>
  </div>
  <div class="roadmap">
    <a v-for="phase in phases" :key="phase.title" :href="`/learn/${phase.items[0][0]}`" class="phase-row">
      <span class="phase-week">{{ phase.weeks }}</span>
      <span class="phase-title">{{ phase.title.slice(5) }}<small>{{ phase.items.length }} modules</small></span>
      <ArrowUpRight :size="19" aria-hidden="true"/>
    </a>
  </div>
</template>
