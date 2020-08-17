<template>
  <v-navigation-drawer :value="isOpen" app>
    <v-list dense>
      <v-list-item link :to="{name:'home'}">
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link :to="{name:'projects'}">
        <v-list-item-action>
          <v-icon>mdi-hard-hat</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Projects</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link :to="{name:'skills'}">
        <v-list-item-action>
          <v-icon>mdi-wrench</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Skills</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link :to="{name:'resume'}">
        <v-list-item-action>
          <v-icon>mdi-book-account</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Resume</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavigationDrawer",
  computed: {
    ...mapGetters(["isOpen"])
  }
};
</script>

<style scoped></style>
