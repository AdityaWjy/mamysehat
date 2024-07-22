<template>
  <div class="home">
    <Navbar />

    <!-- hero -->
    <div class="container">
      <Hero />
    </div>

    <!-- program -->
    <div class="program container">
      <Program />
    </div>

    <div class="testimoni container">
      <Testimoni />
    </div>

    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
import Hero from "@/components/home/HeroComponent.vue";
import Program from "@/components/home/ProgramComponent.vue";
import Testimoni from "../components/home/TestimoniComponent.vue";
export default {
  name: "HomeView",
  components: {
    Navbar,
    FooterComponent,
    Hero,
    Program,
    Testimoni,
  },
};
</script>

<style scoped>
.program {
  margin-top: 100px;
}

@media (max-width: 500px) {
  .program {
    margin-top: 50px;
  }
}
</style>
