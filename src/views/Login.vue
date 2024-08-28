<template>
  <div class="home">
    <Navbar />

    <div class="container">
      <LoginComponent />
    </div>

    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
import LoginComponent from "../components/login/LoginComponent.vue";

export default {
  name: "program-detail",
  components: {
    Navbar,
    FooterComponent,
    LoginComponent,
  },
};
</script>
