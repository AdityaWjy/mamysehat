<template>
  <div class="program-component mb-5">
    <div
      class="d-flex align-items-center justify-items-center flex-column text-center mb-4"
    >
      <h1 class="blueOcean font-semibold">Program</h1>
      <p class="capitalize text-center fw-normal text-content">
        Setiap program kami disusun berdasarkan standar tertinggi, dengan materi yang up-to-date dan dapat langsung diaplikasikan dalam praktik sehari-hari. Jadilah bagian dari komunitas profesional yang berkomitmen untuk memberikan layanan kesehatan terbaik!
      </p>
    </div>

    <!-- program -->

    <div
      class="d-flex flex-column flex-xl-row justify-content-center align-items-center gap-3"
    >
      <div class="mx-3" v-for="program in programs" :key="program.id">
        <CardHero :program="program" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mamyApi } from "../../services/api";
import CardHero from "./cardHero.vue";

export default {
  data() {
    return {
      programs: [],
    };
  },

  methods: {
    navigateToProgram() {
      this.$router.push({ name: "program" });
    },

    async fetchPrograms() {
      try {
        const response = await axios.get(`${mamyApi}acaras`);
        this.programs = response.data;
      } catch (error) {
        console.error("Error fetch programs: ", error);
      }
    },
  },

  mounted() {
    this.fetchPrograms();
  },

  components: {
    CardHero,
  },
};
</script>

<style scoped>
.text-content {
  width: 800px;
  font-size: 18px;
}

img {
  width: 200px;
  height: 200px;
}

.background-box {
  width: 460px;
}

.title {
  font-size: 14px;
}

.deskripsi {
  font-size: 12px;
}

.btn-custom-desktop {
  width: 100%;

  padding-top: 6px;
  padding-bottom: 6px;

  font-size: 10px;
  margin-top: 5px;
  text-align: center;
}

@media (max-width: 500px) {
  .text-content {
    width: 270px;
    font-size: 10px;
  }

  h1 {
    font-size: 25px;
    font-weight: 600;
  }

  h2 {
    font-size: 15px;
  }

  .content-program {
    font-size: 10px;
    margin-bottom: 10px;
  }

  img {
    width: 500px;
    height: 120px;
  }

  .btn-custom-mobile {
    width: 130px;

    padding-top: 6px;
    padding-bottom: 6px;

    font-size: 10px;
    margin-top: 5px;
    text-align: center;
  }
}
</style>
