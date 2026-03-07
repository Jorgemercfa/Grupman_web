import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home-item.vue';
import About from './views/About-item.vue';
import Services from './views/Services-item.vue';
import Contact from './views/Contact-item.vue';
import ServiceDetails from './components/Component-services-item.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/About-item', name: 'About', component: About },
  { path: '/Services-item', name: 'Services', component: Services },
  { path: '/Contact-item', name: 'Contact', component: Contact },
  { path: '/service/:id', name: 'ServiceDetails', component: ServiceDetails },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior() {
    return { top: 0 };
  },
});

router.afterEach((to) => {
  console.log('Navegó a:', to.fullPath);
  console.log('Scroll actual window:', window.scrollY);
  window.scrollTo(0, 0);
  console.log('Scroll después:', window.scrollY);
});

export default router;
