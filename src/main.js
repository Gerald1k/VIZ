import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.config.devtools = true;

// Обработка глобальных ошибок
Vue.config.errorHandler = (err, vm, info) => {
  console.error('Vue Error:', err, info);
};

new Vue({
  router,
  render: h => h(App),
  mounted() {
    console.log('Vue app mounted');
  }
}).$mount('#app');

