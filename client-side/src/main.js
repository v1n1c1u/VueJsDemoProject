import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueMask from 'v-mask';
import App from './App.vue'
import router from './router'

const options = {
  confirmButtonColor: '#42b983',
  cancelButtonColor: '#ff7674',
};

Vue.use(VueSweetalert2, options);
Vue.use(VueMask);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
