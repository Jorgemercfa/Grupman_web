<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
</script>

<template>
  <header>
    <navbar />
  </header>
  <div class="cose-area-1">
    <div class="cose-area">
      <h1 class="title-cose">Mata moscas</h1>
      <t class="text-cose"> fumigamos con ttt </t>
      <t class="text-cose">
        Ser reconocidos como expertos asesores en control de plagas,
        distinguiéndonos por brindar la mejor atención personalizada, utilizar
        los mejores productos y equipos para lograr la total satisfacción del
        cliente.
      </t>

      <h2 class="title-cose">Testimonios</h2>
      <t class="text-cose">
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
.cose-area-1 {
  margin-bottom: 150px;
}

.cose-area {
  height: 220px;
  margin: 7%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title-cose {
  text-align: left;
}

.text-cose {
  text-align: left;
  font-size: 16px;
}
</style>
