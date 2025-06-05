<script setup name=src/components/ServicesList.vue>
import navbar from '@/components/Navbar-item.vue'
import Footer from '@/components/Footer-item.vue'
import { useRouter } from 'vue-router'
import services from '@/data/services.js'

const router = useRouter()
</script>

<template>
  <header>
    <navbar />
  </header>
  <div class="services-area">
    <h1 class="title-services">Nuestros servicios</h1>
    <div class="services-container">
      <div v-for="service in services" :key="service.id" class="service-card">
        <div class="service-content">
          <img v-if="service.image" :src="service.image" :alt="service.name" class="service-image" />
          <div class="service-info">
            <h2 class="service-title">{{ service.name }}</h2>
            <p class="service-description">{{ service.description }}</p>
          </div>
        </div>
        <button
          class="details-button"
          @click="router.push({ name: 'ServiceDetails', params: { id: service.id } })"
        >
          {{ service.details_button }}
        </button>
      </div>
    </div>
  </div>
  <footer>
    <Footer />
  </footer>
</template>

<style>
.services-area {
  margin: 50px 7%;
  text-align: center;
}

.title-services {
  font-size: 2rem;
  color: #333;
  margin-bottom: 30px;
  font-weight: bold;
  text-align: left;
}

.services-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.service-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #41b619;
  color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.service-content {
  display: flex;
  gap: 20px;
  align-items: center;
}

.service-image {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  background-color: #fff;
}

.service-info {
  text-align: left;
}

.service-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.service-description {
  font-size: 1rem;
  line-height: 1.5;
}

.details-button {
  background-color: #007b33;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.details-button:hover {
  background-color: #005a26;
}
</style>