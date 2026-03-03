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
  { path: '/Component-services-item/:id', component: Component, name: 'ServiceDetails', props: true, },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

export default router;