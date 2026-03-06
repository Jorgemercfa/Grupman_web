<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* ✅ Solución global - Asegurar scroll funcionando */
html {
  scroll-behavior: auto !important; /* No smooth, scroll directo */
}

body {
  scroll-behavior: auto !important;
}

#app {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
