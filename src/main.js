import Vue from 'vue'
import App from './App.vue'
import Home from "./components/Home";
import Projects from "./components/Projects";
import vuetify from './plugins/vuetify';
import store from './store'

Vue.config.productionTip = false

const routes = {
  '/': Home,
  '/projects': Projects
}

new Vue({
  vuetify,
  render: h => h(App),
    store,
  routes
}).$mount('#app')
