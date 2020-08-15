<template>
  <v-dialog v-model="dialog.show" max-width="290">
    <v-card class="card fill-height">
      <v-carousel hide-delimiters height="400">
        <v-carousel-item v-for="(image, i) in project.images" :key="i" datasrc="" :src="image"></v-carousel-item>
      </v-carousel>
      <v-card-actions>
        <v-spacer></v-spacer><v-btn color="green darken-1" text @click="dialog.show = false">Disagree</v-btn>
        <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Dialog",
  computed: {
    ...mapGetters(["dialog"])
  }
}
</script>