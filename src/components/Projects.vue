<template>
  <v-container class="fill-height" fluid>
    <v-row class="fill-height overflow-auto" >
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
          name: "School Management System",
          description: "An ERP system consists of 3 main modules, Registrar front-end, Academic management, and Back office.",
          hidden: false,
          tech_stack: ["PHP", "MySQL/MariaDB", "Bootstrap"],
          images: [
            require("../assets/eCampus/RegistrarFrontEndHome.png"),
            require("../assets/eCampus/ApplicantInformation.png"),
            require("../assets/eCampus/Assessment.png"),
            require("../assets/eCampus/BasicEducationSubject.png"),
            require("../assets/eCampus/CourseCurriculum.png"),
            require("../assets/eCampus/Department.png"),
            require("../assets/eCampus/EnrollmentPeriodSchedule.png"),
            require("../assets/eCampus/ManageSubject.png"),
            require("../assets/eCampus/ManualSectioning.png"),
            require("../assets/eCampus/ManualSectioningEdit.png"),
            require("../assets/eCampus/NewSection.png"),
            require("../assets/eCampus/SHSsubjects.png"),
            require("../assets/eCampus/SHStrack.png"),
            require("../assets/eCampus/StudentInformation.png"),
            require("../assets/eCampus/StudentList.png"),
            require("../assets/eCampus/SubjectSchedule.png")
          ]
        },
        {
          name: "HRIS",
          description: "Registrar",
          hidden: true,
          tech_stack: ["PHP", "MySQL/MariaDB", "Bootstrap"],
          images: [
            require("../assets/HRIS/Home.png"),
            require("../assets/HRIS/201File.png"),
            require("../assets/HRIS/CalendarHolidays.png"),
            require("../assets/HRIS/InterviewResults.png"),
            require("../assets/HRIS/MassPunch.png"),
            require("../assets/HRIS/PayStubList.png"),
            require("../assets/HRIS/RecuringHolidays.png"),
            require("../assets/HRIS/TimeKeeping.png")
          ]
        },
        {
          name: "Payroll",
          description: "Registrar",
          hidden: true,
          tech_stack: ["PHP", "MySQL/MariaDB", "Bootstrap"],
          images: [
            require("../assets/Payroll/ManualPayroll.png"),
            require("../assets/Payroll/BIRAlphaList.png"),
            require("../assets/Payroll/GovernmentDeductions.png"),
            require("../assets/Payroll/PayPeriod.png"),
            require("../assets/Payroll/PayStubAmmendments.png"),
            require("../assets/Payroll/RecurringPayStubAmmendments.png")
          ]
        },
        {
          name: "Inventory System",
          description: "Warehouse and procurement system.",
          hidden: true,
          tech_stack: ["PHP", "MySQL/MariaDB", "Bootstrap"],
          images: [
            require("../assets/InventorySystem/Home.png"),
            require("../assets/InventorySystem/ProductInventory.png"),
            require("../assets/InventorySystem/ProductList.png"),
            require("../assets/InventorySystem/AddProduct.png"),
            require("../assets/InventorySystem/BillOfMaterials.png"),
            require("../assets/InventorySystem/CycleCount.png"),
            require("../assets/InventorySystem/InventoryReconciliation.png"),
            require("../assets/InventorySystem/ManageVendor.png"),
            require("../assets/InventorySystem/MaterialIssuance.png"),
            require("../assets/InventorySystem/MaterialIssuanceEdit.png"),
            require("../assets/InventorySystem/ProductCategory.png"),
            require("../assets/InventorySystem/PurchaseApproval.png"),
            require("../assets/InventorySystem/PurchaseInvoice.png"),
            require("../assets/InventorySystem/PurchaseOrder.png"),
            require("../assets/InventorySystem/PurchaseOrderStatus.png"),
            require("../assets/InventorySystem/PurchaseRequest.png"),
            require("../assets/InventorySystem/UnitOfMeasurement.png"),
            require("../assets/InventorySystem/WarehouseApproval.png"),
            require("../assets/InventorySystem/WarehouseHome.png")
          ]
        },
        {
          name: "Media controller",
          description: "Admin dashboard for KTV where user can lock,unlock and restart the KTV player remotely. You can also manage song list here and apply to KTV players.",
          hidden: true,
          tech_stack: [
            "PHP",
            "MySQL/MariaDB",
            "Basic4Java",
            "Bootstrap",
            "JVM",
            "WebSocket"
          ],
          images: [
            require("../assets/MediaController/ArtistsSetup.png"),
            require("../assets/MediaController/MediaFilesSetup.png"),
            require("../assets/MediaController/RoomSetup.png"),
            require("../assets/MediaController/TabletSetup.png")
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
            require("../assets/KTVPlayer/Default.png"),
            require("../assets/KTVPlayer/SampleSong.png")
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
            require("../assets/POS/Home.png"),
            require("../assets/POS/ItemTray.png"),
            require("../assets/POS/Login.jpg"),
            require("../assets/POS/MenuCategory.png"),
            require("../assets/POS/ProductList.png")
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
