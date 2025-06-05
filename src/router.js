import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home-item.vue';
import About from './views/About-item.vue';
import Services from './views/Services-item.vue';
import Contact from './views/Contact-item.vue';
import Component from './components/Component-services-item.vue';

const routes = [
  { path: '/', component: Home, name: 'Home-item' },
  { path: '/About-item', component: About, name: 'About-item' },
  { path: '/Services-item', component: Services, name: 'Services-item' },
  { path: '/Contact-item', component: Contact, name: 'Contact-item' },
  {
    path: '/Component-services-item/:id',
    component: Component,
    name: 'ServiceDetails', // <--- Este nombre debe ser igual al usado en router.push
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
