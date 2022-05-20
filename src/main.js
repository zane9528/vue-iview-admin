import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss' // global css
import './permission'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import './icons' // icon

Vue.config.productionTip = false

Vue.use(ViewUI)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
