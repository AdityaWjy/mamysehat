<template>
  <div class="home">
    <Navbar />

    <div class="container">
      <ProgramDetailComponent />
    </div>

    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
import ProgramDetailComponent from "../components/detail/ProgramDetailComponent.vue";

export default {
  name: "program-detail",
  components: {
    Navbar,
    FooterComponent,
    ProgramDetailComponent,
  },
};
</script>
