<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
import { useRoute } from 'vue-router';
import services from '@/data/services.js';

const route = useRoute();
const id = Number(route.params.id);
const service = services.find((s) => s.id === id);
</script>

<template>
  <header>
    <navbar />
  </header>
  <div class="type-service" v-if="service">
    <h1 class="title">{{ service.name }}</h1>
    <div class="return-area">
      <router-link to="/Services-item">
        <button class="card-button">Regresar</button>
      </router-link>
    </div>
    <div class="type-content">
      <img
        v-if="service.image"
        class="service-image-details"
        :src="service.image"
        :alt="service.name"
      />
      <div class="text-service-type">
        {{ service.longDescription }}
      </div>
      <iframe
        v-if="service.video"
        width="1246"
        height="600"
        :src="service.video"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
  <div v-else>
    <p>Servicio no encontrado.</p>
  </div>
  <footer>
    <Footer />
  </footer>
</template>

<style>
.type-service {
  padding-left: 5%;
  padding-right: 15%;
  font-family: Outfit, Inter, Avenir, Helvetica, Arial, sans-serif;
  padding-bottom: 20%;
}

.return-area {
  padding-bottom: 5%;
}

.type-content {
  gap: 33px;
  padding-left: 5%;
}

.service-image-details {
  height: 400px;
  border-radius: 10px;
  width: 1246px;
  object-fit: cover;
  margin-bottom: 2rem;
}

.text-service-type {
  padding-top: 5%;
  padding-right: 5%;
  padding-left: 15%;
  padding-bottom: 5%;
  font-size: 18px;
  line-height: 1.6;
}
.card-button {
  background-color: #007b33;
  color: white;
  border: none;
  padding: 10px 24px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}
.card-button:hover {
  background: #005a26;
}
</style>
