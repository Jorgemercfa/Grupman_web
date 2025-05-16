<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
</script>

<template>
  <header>
    <navbar />
  </header>
  <div class="about-area-1">
    <div class="about-area">
      <h1 class="title-about">Nosotros</h1>
      <t class="text-about">
        Somos una empresa de control de plagas de atención experta y
        personalizada. Brindamos servicios de saneamiento ambiental:
        Desinsectación, Desratización y Desinfección. También realizamos
        Mantenimiento de Insectocutores, Limpieza de Tanques y Cisternas y
        Control Aviar. Trabajamos con productos seguros para su personal y
        clientes y los mejores equipos para asegurar el Control Integral de
        Plagas. Contamos con autorización de DIGESA. Nuestros colaboradores
        representan nuestra esencia. Trabajamos de la mano con el equipo técnico
        para asegurar la motivación, el compromiso y la capacitación continua en
        temas técnicos y de Seguridad y Salud en el Trabajo.
      </t>
      <h2 class="title-about">Visión:</h2>
      <t class="text-about">
        Ser reconocidos como expertos asesores en control de plagas,
        distinguiéndonos por brindar la mejor atención personalizada, utilizar
        los mejores productos y equipos para lograr la total satisfacción del
        cliente.
      </t>

      <h2 class="title-about">Misión:</h2>
      <t class="text-about">
        Brindar un servicio personalizado de control de plagas, que nos
        diferencie por el profesionalismo de nuestros diagnósticos e informes de
        seguimiento, la eficacia de las intervenciones, la calidad de los
        productos y en especial por la experta atención personalizada que nos
        convierte en soporte y asesor experto de nuestros clientes.
      </t>
    </div>
  </div>

  <footer>
    <Footer />
  </footer>
</template>

<style>
.about-area-1 {
  margin-bottom: 150px;
}

.about-area {
  height: 220px;
  margin: 7%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title-about {
  text-align: left;
}

.text-about {
  text-align: left;
  font-size: 16px;
}
</style>
