import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home-item.vue';
import About from './views/About-item.vue';
import Services from './views/Services-item.vue';
import Contact from './views/Contact-item.vue';
import ServiceDetails from './components/Component-services-item.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Inicio | Grupman' },
  },

  {
    path: '/About-item',
    name: 'About',
    component: About,
    meta: { title: 'Nosotros | Grupman' },
  },

  {
    path: '/Services-item',
    name: 'Services',
    component: Services,
    meta: { title: 'Servicios | Grupman' },
  },

  {
    path: '/Contact-item',
    name: 'Contact',
    component: Contact,
    meta: { title: 'Contacto | Grupman' },
  },

  {
    path: '/service/:id',
    name: 'ServiceDetails',
    component: ServiceDetails,
    meta: { title: 'Servicio | Grupman' },
  },

  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'auto' };
    }
  },
});

// ✅ Título dinámico por página + scroll
router.afterEach((to) => {
  document.title = to.meta.title || 'Grupman';
  window.scrollTo(0, 0);
});

export default router;
