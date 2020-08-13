<template>
  <v-app id="inspire">
    <NavigationDrawer></NavigationDrawer>
    <AppBar></AppBar>
    <Home></Home>
    <v-footer color="teal" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar';
import NavigationDrawer from './components/NavigationDrawer';
import Home from "./components/Home";

export default {
  name: 'App',
  components: {
    AppBar,
    NavigationDrawer,
    Home
  },

}
</script>
