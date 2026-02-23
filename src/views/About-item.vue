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
        <p class="about-text">
          Somos una empresa especializada en control integral de plagas,
          brindando atención experta y personalizada. Ofrecemos servicios de
          desinsectación, desratización, desinfección, mantenimiento de
          insectocutores, limpieza de tanques y cisternas y control aviar.
          Trabajamos con productos seguros y equipos de alta tecnología,
          contando con autorización de DIGESA.
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
    </div>
  </section>

  <footer>
    <Footer />
  </footer>
</template>

<style>
.about-container {
  width: 85%;
  max-width: 1100px;
  margin: auto;
}

.main-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  position: relative;
}

.main-title::after {
  content: '';
  width: 80px;
  height: 4px;
  background-color: #42ae1a; /* Línea roja */
  display: block;
  margin-top: 10px;
  border-radius: 2px;
}

.about-card {
  background-color: #42ae1a; /* Azul oscuro como la imagen */
  color: #f2f2f2;
  padding: 50px;
  border-radius: 20px;
  margin-top: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  line-height: 1.7;
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
</style>
