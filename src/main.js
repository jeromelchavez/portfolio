import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import About from "./components/About";
import VueRouter from "vue-router";

Vue.config.productionTip = false;
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "",
      component: App,
      children: [
        { path: "/", name: "home", component: Home },
        { path: "/projects", name: "projects", component: Projects },
        { path: "/resume", name: "resume", component: Resume },
        { path: "/about", name: "about", component: About },
      ],
    },
  ],
});

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
