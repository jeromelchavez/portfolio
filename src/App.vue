<template>
  <v-app>
    <NavigationDrawer></NavigationDrawer>
    <AppBar></AppBar>
    <v-main>
      <keep-alive>
        <router-view></router-view>
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

export default {
  name: 'App',
  components: {
    AppBar,
    NavigationDrawer
  },
  watch: {
    '$route' (to) {
      document.title = to.meta.title || 'JEROMEL CHAVEZ'
    }
  },


}
</script>
