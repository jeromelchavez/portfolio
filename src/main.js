import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import VueRouter from "vue-router";

Vue.config.productionTip = false;
document.title = "JEROMEL CHAVEZ";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "JEROMEL CHAVEZ",
      },
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
      meta: {
        title: "Projects",
      },
    },
    {
      path: "/resume",
      name: "resume",
      component: Resume,
      meta: {
        title: "Resume",
      },
    },
    {
      path: "/skills",
      name: "skills",
      component: Skills,
      meta: {
        title: "Skills",
      },
    },
  ],
});

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
