<template>
  <div class="training">
    <div class="container mt-5">
      <h1 class="text-center text-xl-start blueOcean">Program</h1>

      <p class="capitalize text-center text-xl-start fw-normal text-content">
        Setiap program kami disusun berdasarkan standar tertinggi, dengan materi
        yang terupdate dan dapat langsung diaplikasikan dalam praktik
        sehari-hari. Jadilah bagian dari komunitas profesional yang berkomitmen
        untuk memberikan layanan kesehatan terbaik.
      </p>

      <!-- List program training start -->

      <div class="row row-card mt-4 gap-5">
        <div
          class="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
          v-for="program in programs"
          :key="program.id"
        >
          <CardProgram :program="program" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mamyApi } from "../../services/api";
import CardProgram from "./CardProgram.vue";

export default {
  data() {
    return {
      programs: [],
    };
  },

  methods: {
    async fetchPrograms() {
      try {
        const response = await axios.get(`${mamyApi}acaras`);
        this.programs = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },

  mounted() {
    this.fetchPrograms();
  },

  components: {
    CardProgram,
  },
};
</script>

<style scoped>
.training {
  margin-top: 100px;
}

.title {
  font-size: 27px;
  text-align: justify;
}

.text-content {
  width: 50%;
}

@media (max-width: 500px) {
  .text-content {
    width: 100%;
  }

  .row-card {
    row-gap: 15px;
  }
}
</style>
