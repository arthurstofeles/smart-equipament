import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueMask from "v-mask";
import vueSmoothScroll from "vue2-smooth-scroll";

Vue.config.productionTip = false

Vue.use(VueMask);
Vue.use(vueSmoothScroll);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
