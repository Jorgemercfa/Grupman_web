// router.js
import { createRouter, createWebHistory } from 'vue-router';

// Importa tus componentes
import Home from './views/Home-item.vue';
import About from './views/About-item.vue';
import Services from './views/Services-item.vue';
import Contact from './views/Contact-item.vue';

// Define las rutas
const routes = [
  { path: '/', component: Home, name: 'Home-item' },
  { path: '/About-item', component: About, name: 'About-item' },
  { path: '/Services-item', component: Services, name: 'Services-item' },
  { path: '/Contact-item', component: Contact, name: 'Contact-item' },
];

// Crea una instancia de Vue Router
const router = createRouter({
  history: createWebHistory(), // Usa el modo de historial HTML5
  routes,
});

export default router;
