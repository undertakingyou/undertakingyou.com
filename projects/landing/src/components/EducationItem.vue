<script setup lang="ts">
import Card from 'primevue/card'

defineProps({
  name: String,
  school: String,
  graduated: String,
})
</script>

<template>
  <Card>
    <template #title>{{ name }} ({{ graduated }})</template>
    <template #subtitle>{{ school }}</template>
  </Card>
</template>

<style scoped>
.p-card {
  min-width: 500px;
}
</style>
