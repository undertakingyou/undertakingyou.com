<script setup lang='ts'>
import Card from 'primevue/card'
import Chip from 'primevue/chip'
import EducationItem from './EducationItem.vue'

const skillsIcon = 'pi-lightbulb'
const skills = [
  'Mac OS',
  'Linux',
  'Windows',
  'NGINX',
  'Apache',
  'IIS',
  'MySQL',
  'MSSQL',
  'PostgreSQL',
  'CockroachDB',
  'MongoDB',
  'CosmoDB',
  'DynamoDB',
  'CI/CD',
  'CircleCI',
  'CodeFresh',
  'Argo',
  'GitLab pipelines',
  'GitHub Actions',
  'TeamCity',
  'AWS',
  'Azure',
  'Digital Ocean',
  'GCP',
  'GitHub',
  'GitLab',
  'BitBucket',
  'Git',
  'Docker',
  'Docker Compose',
  'Docker Swarm',
  'Kubernetes',
  'Helm',
  'Flux',
  'Terraform',
  'Saltstack',
  'RabbitMQ',
  'ZeroMQ',
  'Kafka',
  'BullMQ',
  'Scrum',
  'Kanban',
  'Python',
  'Javascript',
  'Typescript',
  'Java',
  'Scala',
  'C# / .NET',
  'PHP',
  'GoLang',
  'Django',
  'Flask',
  'SpringBoot',
  'Play',
  'Echo',
  'React',
  'Angular',
  'NextJS',
  'NestJS',
  'Node',
  'AI',
  'Agentic AI',
  'AI Tools',
]
const educationIcon = 'pi-graduation-cap'
const education = [
  {
    name: 'BS, Business Management',
    school: 'Western Govenors University',
    graduated: '2012',
  },
  {
    name: 'AAS, Mortuary Science',
    school: 'Arapahoe Comunity College',
    graduated: '2007',
  },
  {
    name: 'Certified Scrum Master',
    school: 'Scrum Alliance',
    graduated: 'July 2019 - July 2021',
  },
  {
    name: 'Funeral Director and Embalmer',
    school: 'Utah Division of Professional Licensing',
    graduated: 'November 2007 - May 2026',
  },
]
</script>

<template>
  <div class='about-wrapper'>
    <!-- Skills -->
    <div class='about-section-header'>
      <span :class='`pi ${skillsIcon} local-icon`'></span>
      <h2>Skills</h2>
    </div>
    <div class='about-section-content'>
      <div v-for='skill in skills'>
        <Chip :label='skill' />
      </div>
    </div>

    <!-- Education -->
    <div class='about-section-header'>
      <span :class='`pi ${educationIcon} local-icon`'></span>
      <h2>Education, Certificates, Licenses</h2>
    </div>
    <div class='about-section-content'>
      <div v-for='ed in education'>
        <EducationItem
          :name='ed.name'
          :school='ed.school'
          :graduated='ed.graduated'
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-wrapper {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.about-section-header {
  display: flex;
  gap: 16px;
  place-items: center;
}
.about-section-content {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
</style>
