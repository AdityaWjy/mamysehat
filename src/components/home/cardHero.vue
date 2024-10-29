<template>
  <div class="card-hero d-flex flex-column flex-md-row">
    <div
      class="background-box mb-2 mb-md-0 d-flex rounded"
      style="background-color: #1e293b"
    >
      <div class="img">
        <img :src="imgSrc + program.gambar" class="rounded" alt="Training" />
      </div>
      <div class="content py-2 px-2 p-md-3">
        <h2 class="text-white font-semibold title">
          {{ program.nama_acara }}
        </h2>
        <p class="text-white-50 content-program deskripsi">
          {{ program.deskripsi }}
        </p>

        <router-link
          :to="'/program/' + program.id"
          class="btn-custom-mobile btn-custom-desktop text-decoration-none text-center"
          style="display: block"
        >
          Read More
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mamyApiImg } from "../../services/api";

export default {
  name: "card-hero",
  data() {
    return {
      imgSrc: `${mamyApiImg}`,
    };
  },
  props: ["program"],
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

.content-program {
  font-size: 12px;
  margin-bottom: 15px;
}

.btn-custom-desktop {
  width: 100%;

  padding-top: 8px;
  padding-bottom: 8px;

  font-size: 12px;
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

  .title {
    font-size: 11px;
  }

  h2 {
    font-size: 15px;
  }

  .content-program {
    font-size: 10px;
    margin-bottom: 10px;
  }

  .background-box {
    width: 22rem;
    height: 160px;
  }

  img {
    width: 150px;
    height: 160px;
  }

  .btn-custom-mobile {
    width: 100%;

    padding-top: 6px;
    padding-bottom: 6px;

    font-size: 10px;
    margin-top: 5px;
    text-align: center;
  }
}
</style>
