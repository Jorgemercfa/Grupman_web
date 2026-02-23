<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Imágenes para el carrusel (debes colocarlas en la carpeta assets)
const images = [
  require('@/assets/picture1.png'),
  require('@/assets/picture2.png'), // Añade estas imágenes a tu proyecto
  require('@/assets/picture3.jpg'), // Añade estas imágenes a tu proyecto// Añade estas imágenes a tu proyecto
];

const currentImageIndex = ref(0);
let intervalId = null;

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
};

onMounted(() => {
  // Cambia de imagen cada 5 segundos
  intervalId = setInterval(nextImage, 5000);
});

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<template>
  <header>
    <navbar />
  </header>
  <div class="home-area">
    <!-- Carrusel automático -->
    <div class="carousel-container">
      <img class="img-home" :src="images[currentImageIndex]" />
      <div class="carousel-dots">
        <span
          v-for="(image, index) in images"
          :key="index"
          :class="{ active: index === currentImageIndex }"
          @click="currentImageIndex = index"
        ></span>
      </div>
    </div>

    <div class="text-home">
      Somos una empresa de control de plagas de atención experta y
      personalizada. Brindamos servicios de saneamiento ambiental:
      Desinsectación, Desratización y Desinfección. También realizamos
      Mantenimiento de Insectocutores, Limpieza de Tanques y Cisternas y Control
      Aviar.
    </div>
    <h1 class="title-home">Nuestros servicios</h1>
    <div class="our-services">
      <div class="logs-item">
        <img class="card-icons" src="@/assets/insect.svg" alt="insect" />
        <div>DESINSECTACIÓN</div>
      </div>
      <div class="logs-item">
        <img class="card-icons" src="@/assets/virus.svg" alt="virus" />
        <div>DESINFECCIÓN</div>
      </div>
      <div class="logs-item">
        <img class="card-icons" src="@/assets/rodent.svg" alt="rodent" />
        <div>DESRATIZACIÓN</div>
      </div>
      <div class="logs-item">
        <img class="card-icons" src="@/assets/moisture.svg" alt="moisture" />
        <div>LIMPIEZA DE CISTERNAS</div>
      </div>
      <div class="logs-item">
        <img
          class="card-icons"
          src="@/assets/monitoring.svg"
          alt="monitoring"
        />
        <div>DIAGNÓSTICO Y MONITOREO</div>
      </div>
    </div>
    <h1 class="title-home">Nuestros sectores</h1>
    <div class="our-sector">
      <div class="logs-item">
        <img class="card-icons" src="@/assets/office.svg" alt="office" />
        <div>OFICINAS</div>
      </div>
      <div class="logs-item">
        <img
          class="card-icons"
          src="@/assets/restaurant.svg"
          alt="restaurant"
        />
        <div>RESTAURANTES</div>
      </div>
      <div class="logs-item">
        <img class="card-icons" src="@/assets/storage.svg" alt="storage" />
        <div>ALMACENES</div>
      </div>
      <div class="logs-item">
        <img class="card-icons" src="@/assets/factory.svg" alt="factory" />
        <div>PLANTAS DE PRODUCCIÓN</div>
      </div>
      <!-- <div class="logs-item">
        <img class="card-icons" src="@/assets/apartment.svg" alt="apartment" />
        <div>CONDOMINIOS</div>
      </div> -->
      <div class="logs-item">
        <img
          class="card-icons"
          src="@/assets/laboratory.svg"
          alt="laboratory"
        />
        <div>LABORATORIOS</div>
      </div>
      <div class="logs-item">
        <img class="card-icons" src="@/assets/store.svg" alt="store" />
        <div>LOCALES COMERCIALES</div>
      </div>
    </div>
    <h1 class="title-home">Nuestros clientes</h1>
    <div class="our-customers">
      <img
        class="customer-icons"
        src="@/assets/customer-1.jpg"
        alt="apartment"
      />
      <img
        class="customer-icons"
        src="@/assets/customer-2.png"
        alt="apartment"
      />
      <img
        class="customer-icons"
        src="@/assets/customer-3.png"
        alt="apartment"
      />
      <img
        class="customer-icons"
        src="@/assets/customer-4.jpg"
        alt="apartment"
      />
      <img
        class="customer-icons"
        src="@/assets/customer-5.png"
        alt="apartment"
      />
      <img
        class="customer-icons"
        src="@/assets/customer-6.png"
        alt="apartment"
      />
    </div>
  </div>

  <footer>
    <Footer />
  </footer>
</template>

<style>
.img-home {
  width: 100%;
  height: 70vh;
  object-fit: cover;
  transition: opacity 0.8s ease;
}

.home-area {
  margin-bottom: 100px;
}

.title-home {
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  margin: 80px 0 40px 0;
  text-align: center;
  position: relative;
}

.title-home::after {
  content: '';
  width: 60px;
  height: 4px;
  background-color: #42ae1a;
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
}

.text-home {
  max-width: 900px;
  margin: 60px auto;
  text-align: center;
  font-size: 18px;
  line-height: 1.7;
}
.our-services {
  width: 100%;
  background: linear-gradient(135deg, #42ae1a, #379614);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 80px 40px;
  flex-wrap: wrap;
}

.card-icons {
  width: 90px;
  height: 90px;
  background-color: white;
  border-radius: 50%;
  padding: 18px;
  object-fit: contain;
  margin-bottom: 20px;
}

.logs-item {
  width: 180px;
  min-height: 220px;
  background-color: #004c08;
  border-radius: 16px;
  text-align: center;
  color: #ffffff;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.logs-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
}

.our-sector {
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #42ae1a, #379614);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.our-customers {
  background: linear-gradient(135deg, #42ae1a, #379614);
  padding: 80px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  flex-wrap: wrap;
}

.customer-icons {
  height: 60px;
  width: auto;
  filter: grayscale(100%);
  opacity: 0.85;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.customer-icons:hover {
  transform: scale(1.08);
  opacity: 1;
  filter: grayscale(0%);
}

/* Estilos para el carrusel */
.carousel-container {
  position: relative;
  width: 100%;
}

.carousel-container::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
}

.carousel-dots {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.carousel-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ffffff80;
  cursor: pointer;
  transition: background-color 0.3s;
}

.carousel-dots .active {
  background: #42ae1a;
  transform: scale(1.2);
}
</style>
