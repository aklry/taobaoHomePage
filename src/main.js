import Vue from 'vue';

import Layout from '@/components/Layout/Index.vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VantUi from './plugins/Vant';
import './assets/style/reset.less';
import 'vant/lib/index.css';

import 'amfe-flexible';

Vue.config.productionTip = false;

Vue.use(VantUi);
Vue.component('Layout', Layout);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
