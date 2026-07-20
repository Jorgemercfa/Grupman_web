<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
</script>

<template>
  <header>
    <navbar />
  </header>

  <section class="about-section">
    <div class="about-container">
      <h1 class="main-title">Nosotros</h1>

      <div class="about-card">
        <div class="about-text-container">
           <p class="about-text">
          Somos una empresa especializada en control integral de plagas,
          brindando atención experta y personalizada. Ofrecemos servicios de
          desinsectación, desratización, desinfección, mantenimiento de
          insectocutores, limpieza de tanques y cisternas.
          Trabajamos con productos seguros y equipos de alta tecnología,
          contando con autorización de DIGESA y certificación de la SGS.
        </p>

        <h2>Visión</h2>
        <p>
          Ser reconocidos como expertos asesores en control de plagas,
          distinguiéndonos por nuestra atención personalizada y resultados
          efectivos que garantizan la satisfacción total del cliente.
        </p>

        <h2>Misión</h2>
        <p>
          Brindar un servicio profesional y personalizado, destacando por la
          precisión de nuestros diagnósticos, eficacia de nuestras
          intervenciones y compromiso continuo con la calidad y seguridad.
        </p>
        </div>

        <div class="about-image-container">
          <img
            src="@/assets/about-image.png"
            alt="Imagen de control de plagas"
            class="about-image"
          />
        </div>
      </div>
    </div>
  </section>

  <footer>
    <Footer />
  </footer>
</template>

<style>
.about-section {
  margin-top: 40px;
}

.about-container {
  width: 85%;
  max-width: 1100px;
  margin: auto;
}

.main-title {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 20px;
  position: relative;
  color: black; 
}

.main-title::after {
  content: '';
  width: 80px;
  height: 4px;
  background-color: #42ae1a;
  display: block;
  margin-top: 10px;
  border-radius: 2px;
}

.about-card {
  background-color: #42ae1a;
  color: #f2f2f2;
  padding: 50px;
  border-radius: 20px;
  margin-top: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  line-height: 1.7;
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
}

.about-card h2 {
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 22px;
  color: #ffffff;
}

.about-card p {
  font-size: 16px;
  margin-bottom: 15px;
}

.about-text-container {
  flex: 2;
}

.about-image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
}

.about-image {
  width: 100%;
  max-width: 320px;
  height: auto;
  border-radius: 15px;
}

/* ---- Responsive: tablets ---- */
@media (max-width: 900px) {
  .about-card {
    padding: 35px;
    gap: 25px;
  }

  .main-title {
    font-size: 34px;
  }
}

/* ---- Responsive: móvil ---- */
@media (max-width: 600px) {
  .about-container {
    width: 92%;
  }

  .about-card {
    flex-direction: column;
    padding: 25px;
    border-radius: 16px;
  }

  .about-image-container {
    order: -1; /* imagen arriba del texto, opcional */
    width: 100%;
  }

  .about-image {
    max-width: 220px;
  }

  .main-title {
    font-size: 28px;
    text-align: center;
  }

  .main-title::after {
    margin-left: auto;
    margin-right: auto;
  }

  .about-card p {
    font-size: 15px;
  }
}

</style>
