<template>
  <div class="card-program">
    <div
      class="card-body text-white rounded px-5 py-5 position-relative"
      style="background-color: #1e293b"
    >
      <div class="m-auto">
        <img :src="imgSrc + program.gambar" alt="" class="w-100 mb-3" />
        <h3 class="title">{{ program.nama_acara }}</h3>

        <p class="grayOcean mb-">Mulai: {{ program.tgl_mulai }}</p>
        <p class="grayOcean mb-">Tanggal early: {{ program.tgl_early }}</p>
        <p class="grayOcean mb-">Harga: {{ hargaSekarang | currency }}</p>

        <router-link
          :to="'/program/' + program.id"
          class="btn-custom-mobile text-decoration-none text-center"
          style="display: block"
        >
          Read More
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProgram",
  data() {
    return {
      imgSrc: "http://127.0.0.1:8000/storage/",
    };
  },
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
