<template>
  <div class="card-program">
    <div
      class="card-body text-white rounded px-5 py-5 position-relative"
      style="background-color: #1e293b"
    >
      <!-- Badge bulat di ujung kanan atas -->

      <div class="m-auto">
        <h3 class="title">{{ program.nama_acara }}</h3>
        <p class="grayOcean mb-4">{{ program.tgl_mulai }}</p>
        <p>{{ program.lokasi }}</p>

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

  props: ["program"],
};
</script>

<style scoped>
.card-body {
  width: 25rem;
}

@media (max-width: 500px) {
  .card-body {
    width: 20rem;
  }
}
</style>
