<script setup>
import 'primeicons/primeicons.css';
</script>

<template>
  <div class="footer-area">
    <div class="contact-footer">
      <h4 class="titile-footer">Contacto</h4>
      <div class="footer-text">
        <div>informes@grupman.pe</div>
        <div>+51 914 114 660</div>
      </div>
    </div>
    <div class="social-media">
      <h4 class="titile-footer">Redes Sociales</h4>
      <div class="social-media2">
        <div>
          <a href="https://es-la.facebook.com/people/Grupman/100021281035067/"
            ><i class="pi pi-facebook"></i
          ></a>
        </div>
        <div>
          <a href="https://pe.linkedin.com/company/grupman"
            ><i class="pi pi-linkedin"></i
          ></a>
        </div>
        <div>
          <i class="pi pi-whatsapp"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.footer-area {
  background-color: #004c08;
  width: 100%;
  height: 175px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  flex-shrink: 0;
}

.contact-footer {
  padding-left: 3%;
}

.titile-footer {
  text-align: left;
  color: white;
  padding-top: 10px;
  margin: 0;
}

.footer-text {
  padding-bottom: 50px;
  color: white;
}

.social-media {
  padding-right: 3%;
}

.social-media2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
}

.pi-facebook {
  font-size: 2rem;
  color: white;
}

.pi-linkedin {
  font-size: 2rem;
  color: white;
}

.pi-whatsapp {
  font-size: 2rem;
  color: white;
}
</style>
