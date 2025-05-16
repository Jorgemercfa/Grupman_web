<template>
  <div class="navbar-area">
    <img class="logo" src="@/assets/company-logo.jpg" />
    <div class="link-style">
      <router-link to="/" class="text-navbar">Inicio</router-link>
      <router-link to="/About-item" class="text-navbar">Nosotros</router-link>
      <router-link to="/Services-item" class="text-navbar"
        >Servicios</router-link
      >
      <router-link to="/Contact-item" class="text-navbar">Contacto</router-link>
    </div>
  </div>
</template>

<script></script>

<style>
.navbar-area {
  height: 70px;
  background-color: #42ae1a;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.link-style {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.logo {
  width: 50px;
  height: 50px;
}

.text-navbar {
  color: white;
  text-decoration: none;
}
</style>
