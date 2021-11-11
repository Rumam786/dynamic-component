import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
// 11 10 2021
// 11 Nov 2021