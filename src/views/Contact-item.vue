<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
</script>

<template>
  <header>
    <navbar />
  </header>

  <div class="contact-area">
    <h1 class="title-cont">Contactenos</h1>
    <div id="wrapper">
      <form
        class="form-area"
        action="https://formsubmit.co/cokijlmf@gmail.com"
        method="POST"
      >
        <label class="text-form" for="name">Nombre</label>
        <input class="input-form" type="text" name="Nombre" />

        <label class="text-form" for="email">Email</label>
        <input class="input-form" type="email" name="Email" />

        <label class="text-form" for="phone">Número Celular</label>
        <input class="input-form" type="phone" name="Celular" />

        <label class="text-form" for="service">Servicio</label>
        <select class="input-form" id="service" name="Servicio">
          <option value=""></option>
          <option value="Desinsectación">Desinsectación</option>
          <option value="Desinfección">Desinfección</option>
          <option value="Desratización">Desratización</option>
          <option value="Limpieza de cisternas">Limpieza de cisternas</option>
          <option value="Diagnóstico y monitoreo">
            Diagnóstico y monitoreo
          </option>
        </select>

        <label class="text-form" for="address">Dirección</label>
        <input class="input-form" type="text" name="Dirección" />

        <label class="text-form" for="meters">Metros cuadrados</label>
        <input class="input-form" type="text" name="Metros" />

        <label class="text-form" for="comment">Mensaje</label>
        <textarea class="input-form" type="text" name="Mensaje"></textarea>

        <input class="input-button" type="submit" value="Enviar" />
      </form>
    </div>
    <div class="other-contact">
      <t>Telefono: (01) 739 7854</t>
      <t>Celular: 914 114 660</t>
      <t>Correo: informes@grupman.pe</t>
    </div>
  </div>
  <footer>
    <Footer />
  </footer>
</template>

<style>
.contact-area {
  margin: 3%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form-area {
  background-color: #42ae1a;
  width: 500px;
  height: 550px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
}

.text-form {
  color: white;
  text-align: left;
}

.input-form {
  border-radius: 10px;
  border-color: white;
  width: 300px;
  height: 25px;
}

.input-button {
  border-radius: 10px;
  width: 100px;
  height: 25px;
  background-color: #004c08;
  border-color: #004c08;
  color: white;
}

.other-contact {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
