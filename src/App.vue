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
/* ✅ Estilos globales para que el scroll funcione bien */
html,
body {
  scroll-behavior: auto;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
}
</style>
