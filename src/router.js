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
    meta: {
      title: 'Inicio | Grupman',
      description: 'Grupman — soluciones profesionales para tu empresa.',
    },
  },

  {
    path: '/About-item',
    name: 'About',
    component: About,
    meta: {
      title: 'Nosotros | Grupman',
      description: 'Conoce al equipo y la historia de Grupman.',
    },
  },

  {
    path: '/Services-item',
    name: 'Services',
    component: Services,
    meta: {
      title: 'Servicios | Grupman',
      description: 'Descubre todos los servicios profesionales que ofrece Grupman.',
    },
  },

  {
    path: '/Contact-item',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contacto | Grupman',
      description: 'Contacta con Grupman para más información sobre nuestros servicios.',
    },
  },

  {
    path: '/service/:id',
    name: 'ServiceDetails',
    component: ServiceDetails,
    meta: {
      title: 'Servicio | Grupman',
      description: 'Detalle del servicio ofrecido por Grupman.',
    },
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

const defaultTitle = 'Grupman';
const defaultDescription = 'Grupman — soluciones profesionales para tu empresa.';

router.afterEach((to) => {
  window.scrollTo(0, 0);

  // Título dinámico
  document.title = to.meta.title || defaultTitle;

  // Meta description dinámica
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', to.meta.description || defaultDescription);

  // Canonical dinámico
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', `${window.location.origin}${to.path}`);
});

export default router;
