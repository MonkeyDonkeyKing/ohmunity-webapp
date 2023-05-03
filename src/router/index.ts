import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';
import Map from '../views/CampusMap.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/map',
    name: 'Map',
    component: Map,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
