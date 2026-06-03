<script setup>
import 'primeicons/primeicons.css';
const year = new Date().getFullYear();
</script>

<template>
  <footer class="footer-area">
    <div class="footer-container">
    <div class="brands-footer">
  <h4 class="titile-footer">Empresas</h4>
  <div class="brands-list">
    <div class="brand-item">
      <span class="brand-dot"></span>
      Grupo Manantial SAC
    </div>
    <div class="brand-item">
      <span class="brand-dot"></span>
      M&F Soluciones Empresariales SAC
    </div>
  </div>
</div>
      <div class="contact-footer">
        <h4 class="titile-footer">Contacto</h4>
        <div class="footer-text">
          <div>informes@grupman.pe</div>
          <div>Cel. +51 993 544 714 / +51 959 184 944</div>
          <div>Tel. 01 739 7854</div>
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
          <a
          href="https://wa.me/51993544714"
        >
          <i class="pi pi-whatsapp"></i>     
        </a>
          
            
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
  <div class="footer-bottom-names">
    <span>Grupo Manantial SAC</span>
    <span>M&amp;F Soluciones Empresariales SAC</span>
  </div>
  <div class="footer-copy">© {{ year }} Todos los derechos reservados.</div>
</div>
  </footer>
</template>

<style>
.footer-area {
  background-color: #004c08; /* SE MANTIENE TU VERDE */
  color: white;
  margin-top: 100px;
}

/* CONTENEDOR */
.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 5%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
}

/* TÍTULOS */
.titile-footer {
  font-size: 1.1rem;
  margin-bottom: 15px;
  position: relative;
  font-weight: 600;
}

/* Línea decorativa (BLANCA para que combine con el verde) */
.titile-footer::after {
  content: '';
  width: 40px;
  height: 3px;
  background-color: #ffffff;
  position: absolute;
  bottom: -6px;
  left: 0;
  border-radius: 4px;
}

/* TEXTO */
.footer-text {
  font-size: 0.95rem;
  color: #e6e6e6;
  line-height: 1.6;
}

/* ICONOS */
.social-media2 {
  display: flex;
  gap: 20px;
  margin-top: 15px;
}

.social-media2 a,
.social-media2 i {
  font-size: 1.8rem;
  color: #e6e6e6;
  transition: 0.3s ease;
  cursor: pointer;
}

/* Hover elegante */
.social-media2 a:hover,
.social-media2 i:hover {
  color: #ffffff;
  transform: translateY(-3px);
}

/* BARRA INFERIOR */
.footer-bottom {
  text-align: center;
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.footer-bottom-names {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 0.8rem;
  color: #cccccc;
}

.footer-copy {
  font-size: 0.75rem;
  color: #888888;
  margin-top: 6px;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .titile-footer::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .social-media2 {
    justify-content: center;
  }
}
</style>
