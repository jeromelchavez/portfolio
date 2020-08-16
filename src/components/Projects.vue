<template>
  <v-container class="fill-height" fluid>
    <v-row class="fill-height overflow-auto">
      <v-col v-for="(project, index) in projects" :key="index" :lg="4" :md="6">
        <v-hover v-slot:default="{ hover }">
          <v-card class="card fill-height" :elevation="hover ? 16 : 5">
            <v-carousel hide-delimiters height="400">
              <v-carousel-item v-for="(image, i) in project.images" @click.stop="showModal(index)" :key="i" datasrc="" :src="image"></v-carousel-item>
            </v-carousel>
            <v-card-title>{{ project.name }}</v-card-title>
            <v-card-text>
              <div class="my-4 subtitle-1">{{ project.description }}</div>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
                <v-chip v-for="(tech, i) in project.tech_stack" :key="i">{{ tech }}</v-chip>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  <Dialog></Dialog>
  </v-container>
</template>

<script>
import Dialog from "./Dialog";
import {mapGetters} from "vuex";
export default {
  name: "Projects",
  components: {
    Dialog
  },
  data: () => {
    return {
      projects: [
        {
          name: "Registrar",
          description: "Registrar",
          hidden: true,
          tech_stack: ["PHP", "MySQL/MariaDB", "Bootstrap"],
          images: [
            require("../assets/HMS/Dashboard.jpg"),
            require("../assets/HMS/Folio.jpg"),
            require("../assets/HMS/GuestDatabase.jpg")
          ]
        },
        {
          name: "Cashier",
          description: "Registrar",
          hidden: true,
          tech_stack: ["PHP", "MySQL/MariaDB", "Bootstrap"],
          images: [
            require("../assets/HMS/Dashboard.jpg"),
            require("../assets/HMS/Folio.jpg"),
            require("../assets/HMS/GuestDatabase.jpg")
          ]
        },
        {
          name: "HRIS",
          description: "Registrar",
          hidden: true,
          tech_stack: ["PHP", "MySQL/MariaDB", "Bootstrap"],
          images: [
            require("../assets/HMS/Dashboard.jpg"),
            require("../assets/HMS/Folio.jpg"),
            require("../assets/HMS/GuestDatabase.jpg")
          ]
        },
        {
          name: "Payroll",
          description: "Registrar",
          hidden: true,
          tech_stack: ["PHP", "MySQL/MariaDB", "Bootstrap"],
          images: [
            require("../assets/HMS/Dashboard.jpg"),
            require("../assets/HMS/Folio.jpg"),
            require("../assets/HMS/GuestDatabase.jpg")
          ]
        },
        {
          name: "Inventory System",
          description: "Warehouse and procurement system.",
          hidden: true,
          tech_stack: ["PHP", "MySQL/MariaDB", "Bootstrap"],
          images: [
            require("../assets/HMS/Dashboard.jpg"),
            require("../assets/HMS/Folio.jpg"),
            require("../assets/HMS/GuestDatabase.jpg")
          ]
        },
        {
          name: "KTV Admin",
          description: "Admin dashboard for KTV where user can lock,unlock and restart the KTV player remotely. You can also manage songlist here and apply to KTV players.",
          hidden: true,
          tech_stack: [
            "PHP",
            "MySQL/MariaDB",
            "Basic4Java",
            "Bootstrap",
            "WebSocket"
          ],
          images: [
            require("../assets/HMS/Dashboard.jpg"),
            require("../assets/HMS/Folio.jpg"),
            require("../assets/HMS/GuestDatabase.jpg")
          ]
        },
        {
          name: "KTV Player",
          description: "A JVM/daemon app that pulls data from the server using FTP and stores it locally. Also used for controlling the command line media player via named pipe.",
          hidden: true,
          tech_stack: [
            "PHP",
            "MySQL/MariaDB",
            "Basic4Java",
            "Bootstrap",
            "WebSocket"
          ],
          images: [
            require("../assets/HMS/Dashboard.jpg"),
            require("../assets/HMS/Folio.jpg"),
            require("../assets/HMS/GuestDatabase.jpg")
          ]
        },
        {
          name: "KTV Controller",
          description: "An android app used for controlling the KTV player via WiFi.",
          hidden: true,
          tech_stack: ["Basic4Android", "WebSocket"],
          images: [
            require("../assets/HMS/Dashboard.jpg"),
            require("../assets/HMS/Folio.jpg"),
            require("../assets/HMS/GuestDatabase.jpg")
          ]
        },
        {
          name: "Point Of Sale",
          description: "An android app used for controlling the KTV player via WiFi.",
          hidden: true,
          tech_stack: ["Basic4Android", "WebSocket"],
          images: [
            require("../assets/HMS/Dashboard.jpg"),
            require("../assets/HMS/Folio.jpg"),
            require("../assets/HMS/GuestDatabase.jpg")
          ]
        },
        {
          name: "Hotel Management System",
          description: "User interface for cashier/receptionist.",
          hidden: false,
          tech_stack: [
            "PHP",
            "MySQL/MariaDB",
            "Kotlin",
            "Bootstrap",
            "WebSocket"
          ],
          images: [
            require("../assets/HMS/Dashboard.jpg"),
            require("../assets/HMS/Folio.jpg"),
            require("../assets/HMS/GuestDatabase.jpg")
          ]
        }
      ]
    };
  },
  methods:{
    showModal(project_key){
      this.$store.dispatch("SHOW_MODAL",true, project_key);
    }
  },
  computed: {
    ...mapGetters(["dialog"])
  }
};
</script>
