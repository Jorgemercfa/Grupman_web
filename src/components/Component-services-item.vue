<script setup>
import Navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
import { useRoute } from 'vue-router';
import services from '@/data/services.js';

const route = useRoute();
const id = Number(route.params.id);

const service = services.find((s) => s.id === id);
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main class="container">
    <div v-if="service" class="service-wrapper">
      <router-link to="/Services-item" class="return-area">
        <button class="card-button">Regresar</button>
      </router-link>

      <h1 class="title">{{ service.name }}</h1>

      <img
        v-if="service.image"
        class="service-image-details"
        :src="service.image"
        :alt="service.name"
      />

      <div class="text-service-type">
        {{ service.longDescription }}
      </div>

      <!-- Video Responsive -->
      <div v-if="service.video1" class="video-container">
        <iframe :src="service.video1" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>

    <div v-else class="not-found">
      <p>Servicio no encontrado.</p>
    </div>
  </main>

  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: Outfit, Inter, Avenir, Helvetica, Arial, sans-serif;
}

.service-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.return-area {
  align-self: flex-start;
  margin-bottom: 20px;
}

.title {
  font-size: 2.2rem;
  margin-bottom: 40px;
  color: #111;
  position: relative;
  display: inline-block;
}

.title::after {
  content: '';
  width: 70px;
  height: 4px;
  background-color: #42ae1a;
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 6px;
}

.service-image-details {
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.text-service-type {
  max-width: 800px;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 40px;
}

/* VIDEO RESPONSIVE PRO */
.video-container {
  position: relative;
  width: 100%;
  max-width: 1000px;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.card-button {
  background-color: #007b33;
  color: white;
  border: none;
  padding: 10px 26px;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.card-button:hover {
  background: #005a26;
  transform: translateY(-2px);
}

.not-found {
  text-align: center;
  font-size: 1.2rem;
  padding: 60px 0;
}

/* RESPONSIVE */

@media (max-width: 768px) {
  .container {
    padding: 20px 15px;
  }

  .title {
    font-size: 1.6rem;
  }

  .service-image-details {
    height: auto;
  }

  .text-service-type {
    font-size: 1rem;
  }

  .return-area {
    align-self: center;
  }

  .card-button {
    width: 100%;
  }
}
</style>
