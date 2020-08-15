<template>
  <v-app id="inspire">
    <NavigationDrawer></NavigationDrawer>
    <AppBar></AppBar>
    <v-main>
      <keep-alive>
        <component v-bind:is="component"/>
      </keep-alive>
    </v-main>
    <v-footer color="teal" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar';
import NavigationDrawer from './components/NavigationDrawer';
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import About from "./components/About";
import Loading from "./components/Loading";
import Error from "./components/Error";
// import VueRouter from 'vue-router'

// const router = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   routes: [
//     { path: '/', name: 'home', component: Home },
//     { path: '/projects', name: 'projects', component: Projects },
//     { path: '/resume', name: 'resume', component: Resume },
//     { path: '/about', name: 'about', component: About }
//   ]
// })
import { mapGetters } from "vuex";

const HomeCom = () => ({
  component: new Promise(resolve => {
    resolve(Home);
  }),
  loading: Loading,
  error: Error,
  delay: 0,
  timeout: 3000
});

const ProjectsCom = () => ({
  component: new Promise(resolve => {
    resolve(Projects);
  }),
  loading: Loading,
  error: Error,
  delay: 0,
  timeout: 3000
});

const ResumeCom = () => ({
  component: new Promise(resolve => {
    resolve(Resume);
  }),
  loading: Loading,
  error: Error,
  delay: 0,
  timeout: 3000
});

const AboutCom = () => ({
  component: new Promise(resolve => {
    resolve(About);
  }),
  loading: Loading,
  error: Error,
  delay: 0,
  timeout: 3000
});

export default {
  name: 'App',
  components: {
    AppBar,
    NavigationDrawer,
    HomeCom,
    ProjectsCom,
    ResumeCom,
    AboutCom,
  },
  computed: {
    ...mapGetters(["component"])
  }

}
</script>
