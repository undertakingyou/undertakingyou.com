<script setup lang="ts">
import Card from 'primevue/card'

defineProps({
  title: String,
  company: String,
  description: String,
  link: String,
})
</script>

<template>
  <Card>
    <template #title>{{ title }}</template>
    <template #subtitle>{{ company }}</template>
    <template #content>
      <div class="content-wrapper">
        <p>{{ description }}</p>
        <a :href="link">Website</a>
      </div>
    </template>
  </Card>
</template>
