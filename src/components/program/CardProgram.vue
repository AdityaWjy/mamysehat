<template>
  <div class="card-program">
    <div
      class="card-body text-white rounded px-5 py-5 position-relative"
      style="background-color: #1e293b"
    >
      <!-- Badge bulat di ujung kanan atas -->
      <div
        class="badge-circle position-absolute top-0 end-0 bg-danger"
        v-if="program.kemenkes"
        style="
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: translate(30%, -30%);
        "
      >
        <span
          class="fw-bold"
          style="
            transform: rotate(25deg);
            display: block;
            text-align: center;
            color: white;
            font-size: 10px;
          "
        >
          15 SKP <br />
          Kemenkes
        </span>
      </div>

      <div class="m-auto">
        <h3 class="title">{{ program.title }}</h3>
        <p class="grayOcean">{{ program.date }}</p>
        <button class="btn-custom w-100">Read More</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardProgram",

  data() {
    return {
      kemenkes: false,
    };
  },

  props: {
    program: Object, // Define the type of program prop
  },
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
