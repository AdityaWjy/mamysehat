<template>
  <div class="home">
    <Navbar />

    <!-- hero -->
    <div class="container mb-5">
      <HeroAbout />
    </div>

    <!-- card -->
    <div class="container mb-5">
      <CardAbout />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
import HeroAbout from "../components/about/HeroAbout.vue";
import CardAbout from "../components/about/CardAbout.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    FooterComponent,
    HeroAbout,
    CardAbout,
  },
};
</script>
