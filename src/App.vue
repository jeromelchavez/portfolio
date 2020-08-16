<template>
  <v-app>
    <NavigationDrawer></NavigationDrawer>
    <AppBar></AppBar>
    <v-main>
        <router-view></router-view>

    </v-main>
    <v-footer color="teal" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar';
import NavigationDrawer from './components/NavigationDrawer';

export default {
  name: 'App',
  components: {
    AppBar,
    NavigationDrawer
  }

}
</script>
