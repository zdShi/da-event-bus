import Vue from 'vue'
import App from './App.vue'
import _eb from "@/eventBus";

Vue.config.productionTip = false
Vue.prototype.$myEvents = _eb
new Vue({
  render: h => h(App),
}).$mount('#app')
