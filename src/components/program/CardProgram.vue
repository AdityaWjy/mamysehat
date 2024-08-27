<template>
  <div class="card-program">
    <div
      class="card-body text-white rounded px-5 py-5 position-relative"
      style="background-color: #1e293b"
    >
      <!-- Badge bulat di ujung kanan atas -->

      <div class="m-auto">
        <img :src="'/images/program/' + program.gambar" alt="" />
        <h3 class="title">{{ program.nama_acara }}</h3>

        <p class="grayOcean mb-">Mulai: {{ program.tgl_mulai }}</p>
        <p class="grayOcean mb-">tanggal early: {{ program.tgl_early }}</p>
        <p class="grayOcean mb-">Harga: {{ hargaSekarang | currency }}</p>

        <router-link
          :to="'/program/' + program.id"
          class="btn-custom text-decoration-none text-center"
          style="display: block"
        >
          Read More</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardProgram",

  computed: {
    hargaSekarang() {
      const today = new Date();
      const tglEarly = new Date(this.program.tgl_early);

      // check apakah hari ini masih di periode early
      if (today <= tglEarly) {
        return this.program.harga_early;
      } else {
        return this.program.harga_reguler;
      }
    },
  },

  props: ["program"],
};
</script>

<style scoped>
.card-body {
  width: 25rem;
}

.title {
  font-size: 18px;
}
@media (max-width: 500px) {
  .card-body {
    width: 20rem;
  }
}
</style>
