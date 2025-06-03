<script setup lang="ts">
import Role from './Role.vue'

const roles = [
  {
    title: 'CTO / Co-Owner',
    company: 'Cemetek',
    description: 'Cemetery and Funeral Home software development.',
    link: 'https://cemetek.com',
  },
  {
    title: 'Founder / Principal Engineer',
    company: 'Open By Design',
    description: 'Freelance devops and web application development.',
    link: 'https://openbydesign.net',
  },
]
</script>

<template>
  <div class="current-role-wrapper">
    <div v-for="role in roles" :key="role.title">
      <Role
        :title="role.title"
        :company="role.company"
        :description="role.description"
        :link="role.link"
      />
    </div>
  </div>
</template>
