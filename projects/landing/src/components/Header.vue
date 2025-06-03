<template>
  <div class="header-wrapper">
    <h1>Will Smith</h1>
    <div>
      <p>Faith-Centered Family Man</p>
      <p>Software Engineer and Leader</p>
      <p>Adventurous Spirit</p>
      <p>Musical Soul</p>
      <p>Tech-Savvy Innovator</p>
      <p>Modern Renaissance Man</p>
    </div>
  </div>
</template>

<style scoped>
.header-wrapper > h1 {
  color: white;
}

@media (min-width: 1024px) {
  .header-wrapper {
    display: flex;
    flex-direction: column;
    place-items: flex-start;
    max-width: 45%
  }

  .header-wrapper > h1 {
    padding-bottom: 10px;
  }

  .header-wrapper > div {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    line-height: 0.7;
  }
}
</style>
