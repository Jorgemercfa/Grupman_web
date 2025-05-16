<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
</script>

<template>
  <header>
    <navbar />
  </header>
  <div class="home-area">
    <img class="img-home" src="@/assets/picture1.png" />

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
      <div class="logs-item">
        <img class="card-icons" src="@/assets/apartment.svg" alt="apartment" />
        <div>CONDOMINIOS</div>
      </div>
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
  height: 500px;
}

.home-area {
  margin-bottom: 100px;
}

.title-home {
  text-align: center;
}

.text-home {
  height: 16vh;
  margin: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.our-services {
  width: 100%;
  height: 300px;
  background-color: #42ae1a;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.card-icons {
  margin-top: 10%;
  height: 120px;
  width: 120px;
  background-color: #ffffff;
  border-radius: 10px;
}

.card-icos-2 {
  margin-top: 10%;
  height: 120px;
  width: 120px;
  background-color: #000000;
  border-radius: 10px;
}

.customer-icons {
  height: 80px;
  width: 160px;
  padding-left: 15px;
}

.logs-item {
  border-radius: 10px;
  width: 150px;
  height: 200px;
  background-color: #004c08;
  text-align: center;
  color: #ffffff;
}

.our-sector {
  width: 100%;
  height: 300px;
  background-color: #42ae1a;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.our-customers {
  width: 100%;
  height: 200px;
  background-color: #42ae1a;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>
