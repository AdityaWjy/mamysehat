<template>
  <div class="home">
    <Navbar />

    <div class="container mb-5">
      <!-- training -->

      <TrainingComponent />
    </div>

    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
import TrainingComponent from "../components/program/TrainingComponent.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    FooterComponent,
    TrainingComponent,
  },
};
</script>
