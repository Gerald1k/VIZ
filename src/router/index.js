import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../modules/main/index.js';
import Requisites from '../modules/requisites/index.js';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/requisites',
    name: 'Requisites',
    component: Requisites
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

// Обработка ошибок роутера
router.onError((error) => {
  console.error('Router error:', error);
});

export default router;

