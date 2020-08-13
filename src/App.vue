<template>
  <v-app id="inspire">
    <NavigationDrawer></NavigationDrawer>
    <AppBar></AppBar>
    <keep-alive>
    <component v-bind:is="component"/>
    </keep-alive>
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

import { mapGetters } from "vuex";

export default {
  props:["dialog"],
  name: 'App',
  components: {
    AppBar,
    NavigationDrawer,
    Home,
    Projects,
    Resume,
    About,
  },
  computed: {
    ...mapGetters(["component"])
  }

}
</script>
