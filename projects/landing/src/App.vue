<script setup lang='ts'>
import TheWelcome from './components/TheWelcome.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import CurrentRoles from './components/CurrentRoles.vue'
import About from './components/About.vue'
</script>

<template>
  <header>
    <Header />
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <content>
    <About />
  </content>

  <rightbar>
    <CurrentRoles />
  </rightbar>

  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: flex-start;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    flex-direction: column;
    place-items: flex-start;
  }
}
</style>
