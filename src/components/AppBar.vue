<template>
  <v-app-bar app color="teal" dark>
    <v-app-bar-nav-icon v-on:click="openDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>JEROMEL CHAVEZ</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  methods: {
    openDrawer(){
      this.$store.dispatch("TOGGLE_DRAWER")
    }
  }
}
</script>

<style scoped>


</style>