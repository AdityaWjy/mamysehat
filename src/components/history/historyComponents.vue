<template>
  <div class="training">
    <div class="container mt-5">
      <h1 class="text-center text-xl-start blueOcean">Riwayat pendaftaran</h1>
      <p class="capitalize text-center text-xl-start fw-normal text-content">
        Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit
        id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
        habitasse in velit fringilla feugiat senectus in.
      </p>

      <!-- Responsive List of Program Cards -->
      <div class="row row-card mt-4 gap-5">
        <div
          class="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
          v-for="history in historys"
          :key="history.id"
        >
          <CardHistory :history="history" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardHistory from "./CardHistory.vue";

export default {
  data() {
    return {
      historys: [],
    };
  },

  components: {
    CardHistory,
  },

  mounted() {
    this.fetchHistory();
  },

  methods: {
    async fetchHistory() {
      const token = localStorage.getItem("auth_token");
      const userId = localStorage.getItem("user_id");

      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/history",
          {
            user_id: userId, // Include user_id in the body
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json", // Add Accept header
            },
          }
        );

        this.historys = response.data; // Assign the response data
      } catch (error) {
        console.error("Error fetching history: ", error);
      }
    },
  },
};
</script>

<style scoped>
.training {
  margin-top: 100px;
}

.text-content {
  width: 50%;
}

@media (max-width: 768px) {
  .text-content {
    width: 100%;
  }

  .row-card {
    row-gap: 20px;
  }
}
</style>
