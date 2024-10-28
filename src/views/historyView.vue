<template>
  <div class="home">
    <Navbar />

    <div class="container mb-5">
      <HistoryComponents />
    </div>

    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
import HistoryComponents from "../components/history/historyComponents.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    HistoryComponents,
    FooterComponent,
  },
};
</script>
