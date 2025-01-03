<script setup>
import AppNavbar from './components/navbar/AppNavbar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <section>
      <RouterView />
    </section>

    <header>
      <AppNavbar />
    </header>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  grid-template-rows: auto;

  width: 100%;
  height: auto;
  min-height: 100vh;
}

section {
  grid-column-start: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
}
</style>
