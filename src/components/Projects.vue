<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <div v-for="(project,index) in projects" :key="index" v-show="!project.hidden">
      <v-card class="mx-auto my-12" max-width="500" v-for="(module,index) in project.modules" :key="index">
        <v-carousel hide-delimiters height="400">
          <v-carousel-item v-for="(image,i) in module.images" @click.stop="dialog = true" :key="i" :src="image"></v-carousel-item>
        </v-carousel>

        <v-card-title>{{module.name}} ({{project.name}}) </v-card-title>

        <v-card-text>
          <div class="my-4 subtitle-1">
            {{ module.description }}
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-text>
          <v-chip-group active-class="deep-purple accent-4 white--text" column>
            <v-chip dark color="teal" v-for="(tech,i) in module.tech_stack" :key="i">{{ tech }}</v-chip>
          </v-chip-group>
        </v-card-text>

      </v-card>
      </div>
    </v-container>
    <v-dialog
        v-model="dialog"
        max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>

        <v-card-text>
          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
          >
            Disagree
          </v-btn>

          <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-main>
</template>

<script>
export default {
  name: "Home",
  data:()=>{
    return {
      projects: [
        {
          name: "School ERP",
          description: "test",
          hidden: true,
          modules: [
            {
              name: "Registrar",
              description: "Registrar",
              hidden: true,
              tech_stack:["PHP","MySQL/MariaDB","Bootstrap"],
              images: [
                  "asdasd.png",
                  "asdasd.png"
              ]
            },
            {
              name: "Cashier",
              description: "Registrar",
              hidden: true,
              tech_stack:["PHP","MySQL/MariaDB","Bootstrap"],
              images: [
                  "asdasd.png",
                  "asdasd.png"
              ]
            },
            {
              name: "HRIS",
              description: "Registrar",
              hidden: true,
              tech_stack:["PHP","MySQL/MariaDB","Bootstrap"],
              images: [
                  "asdasd.png",
                  "asdasd.png"
              ]
            },
            {
              name: "Payroll",
              description: "Registrar",
              hidden: true,
              tech_stack:["PHP","MySQL/MariaDB","Bootstrap"],
              images: [
                  "asdasd.png",
                  "asdasd.png"
              ]
            }
          ]
        },
        {
          name: "KTV System",
          description: "test",
          hidden: true,
          modules: [
            {
              name: "Admin",
              description: "Registrar",
              hidden: true,
              tech_stack:["PHP","MySQL/MariaDB","Basic4Java","Bootstrap","WebSocket"],
              images: [
                  "asdasd.png",
                  "asdasd.png"
              ]
            },
            {
              name: "KTV Player",
              description: "Registrar",
              hidden: true,
              tech_stack:["PHP","MySQL/MariaDB","Basic4Java","Bootstrap","WebSocket"],
              images: [
                  "asdasd.png",
                  "asdasd.png"
              ]
            },
            {
              name: "KTV controller",
              description: "Registrar",
              hidden: true,
              tech_stack:["Basic4Android","WebSocket"],
              images: [
                  "asdasd.png",
                  "asdasd.png"
              ]
            }
          ]
        },
        {
          name: "Hotel Management System",
          description: "HMS",
          hidden: false,
          modules: [
            {
              name: "Frontdesk",
              description: "User interface for cashier/receptionist.",
              hidden: false,
              tech_stack:["PHP","MySQL/MariaDB","Kotlin","Bootstrap","WebSocket"],
              images: [
                require("../assets/HMS/Dashboard.jpg"),
                require("../assets/HMS/Folio.jpg"),
                require("../assets/HMS/GuestDatabase.jpg"),
              ]
            }
          ]
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>