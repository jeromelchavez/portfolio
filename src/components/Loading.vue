<template>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-progress-circular
            :size="100"
            :width="7"
            color="teal"
            indeterminate
        ></v-progress-circular>
      </v-row>
    </v-container>
</template>

<script>
export default {
  name: "Loading",
  mounted() {
    console.log("hello")
  }
}
</script>