<template>
  <div class="home">
    <Navbar />

    <div class="container">
      <RegisterComponent />
    </div>

    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
import RegisterComponent from "../components/register/RegisterComponent.vue";

export default {
  name: "program-detail",
  components: {
    Navbar,
    FooterComponent,
    RegisterComponent,
  },
};
</script>
