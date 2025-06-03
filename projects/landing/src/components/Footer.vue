<script setup lang='ts'>
  import Button from 'primevue/button';

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };
</script>

<template>
  <div class="footer-wrapper">
    <Button icon="pi pi-linkedin" aria-label="LinkedIn" @click="openLink('https://www.linkedin.com/in/will-smith-7692084/')"/>
    <Button icon="pi pi-github" aria-label="Github" @click="openLink('https://github.com/undertakingyou')"/>
    <Button icon="pi pi-discord" aria-label="Discord" @click="openLink('https://discordapp.com/users/488741715742818334')" />
    <Button icon="pi pi-youtube" aria-label="YouTube" @click="openLink('https://www.youtube.com/@willsmith8576')" />
  </div>
</template>

<style scoped>
  .footer-wrapper {
    display: flex;
    gap: 16px;
  }
</style>
