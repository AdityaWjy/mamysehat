<template>
  <div>
    <!-- create gray bg -->

    <div class="p-3 mb-2 bg-body-secondary rounded">
      <!-- create flex -->
      <div
        class="d-flex flex-wrap flex-xl-row mt-2 mt-xl-4 align-items-stretch justify-content-between gap-1 gap-xl-5"
      >
        <div class="background-box shadow-lg mb-2 mb-xl-0">
          <div class="d-flex rounded h-100" style="background-color: #ffff">
            <p class="text-dark px-3 text-content pt-3 pt-xl-5 mt-xl-2">
              <span class="fw-bold"> Mamysehat </span>
              <span class="fw-bold blueOcean"> Academy </span>
              ini menawarkan berbagai program pelatihan klinis, seminar,
              workshop, dan webinar. Program-program ini dirancang untuk
              memenuhi kebutuhan beragam praktisi kesehatan, mulai dari perawat,
              bidan, dokter, hingga tenaga medis lainnya.
            </p>
          </div>
        </div>

        <div class="background-box shadow-lg mb-2 mb-xl-0">
          <div class="d-flex rounded h-100" style="background-color: #ffff">
            <p class="text-dark px-3 text-content pt-3 pt-xl-5 pb-xl-4">
              <span class="fw-bold"> Mamysehat </span>
              <span class="fw-bold blueOcean"> Academy </span>
              mengutamakan kualitas pengajaran dengan mengundang para ahli dan
              praktisi terkemuka dalam bidangnya sebagai instruktur. Mereka juga
              menggunakan teknologi terbaru dalam metode pengajaran untuk
              memastikan pengalaman belajar yang interaktif dan efektif.
            </p>
          </div>
        </div>

        <div class="background-box shadow-lg mb-2 mb-xl-0">
          <div class="d-flex rounded h-100" style="background-color: #ffff">
            <p class="text-dark px-3 text-content pt-3 pt-xl-5 pb-xl-4">
              <span class="fw-bold"> Mamysehat </span>
              <span class="fw-bold blueOcean"> Academy </span> Melalui pelatihan
              yang di berikan, Mamysehat Academy berharap dapat memberikan
              dampak positif yang signifikan terhadap sistem kesehatan lokal
              maupun internasional dengan mempersiapkan profesional yang
              kompeten dan terampil.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.text-content {
  width: 800px;
  font-size: 15px;
  text-align: justify;
}

img {
  width: 200px;
  height: 200px;
}

.background-box {
  width: 600px;
}

@media (max-width: 500px) {
  .text-content {
    width: auto;
    font-size: 10px;
    text-align: justify;
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

  .background-box {
    width: 310px;
  }

  img {
    width: 120px;
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
