<template>
  <div class="home">
    <Navbar />

    <ContactComponent />

    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
import ContactComponent from "../components/contact/ContactComponent.vue";

export default {
  name: "program-detail",
  components: {
    Navbar,
    FooterComponent,
    ContactComponent,
  },
};
</script>
