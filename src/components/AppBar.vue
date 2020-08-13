<template>
  <v-app-bar color="teal" app dark>
    <v-app-bar-nav-icon v-on:click="openDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>JEROMEL CHAVEZ</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon large target="_blank" href="https://www.linkedin.com/in/jeromel-chavez-5571a7122" v-on="on">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
        </template>
        <span>LinkedIn</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon large target="_blank" href="https://github.com/jeromelchavez/portfolio" v-on="on">
            <v-icon>mdi-github</v-icon>
          </v-btn>
        </template>
        <span>GitHub</span>
      </v-tooltip>
    </v-toolbar-items>
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