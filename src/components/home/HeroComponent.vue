<template>
  <div class="hero">
    <!-- Desktop Hero Display -->

    <div class="d-none d-md-block">
      <div class="row mt-4 ml-3">
        <div class="col-md-6">
          <div class="flex d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h1>
                Mamy Sehat
                <br />

                <span class="blueOcean">Academy</span>
              </h1>

              <p
                class="capitalize text-content fw-normal mb-4"
                style="font-size: 18px"
              >
                Mamy Academy hadir untuk mendukung para tenaga kesehatan, dokter
                umum, dan spesialis dalam memperluas pengetahuan dan memperluas
                pengetahuan dan keterampilan. Kegiatan kami dirancang oleh para
                ahli untuk memberikan pelatihan yang berkualitas, relevan dan
                terupdate.
              </p>

              <router-link to="/program" class="btn-custom text-decoration-none"
                >Get Our Service</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-md-6 d-flex justify-content-center align-self-center">
          <img src="/images/hero-images.png" width="450px" />
        </div>
      </div>
    </div>

    <!-- Mobile Hero Display -->

    <div class="d-sm-block d-md-none">
      <!-- Div display mobile -->
      <div class="row row-mobile">
        <div
          class="col-md-6 mb-2 d-flex justify-content-center align-self-center mobile"
        >
          <img src="/images/hero-images.png" width="310px" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center container">
              <h2 class="mt-3">
                Mamy Sehat

                <span class="blueOcean">Academy</span>
              </h2>

              <p class="capitalize fw-normal" style="font-size: 14px">
                Mamy Academy hadir untuk mendukung para tenaga kesehatan, dokter
                umum, dan spesialis dalam memperluas pengetahuan dan
                keterampilan. Kegiatan kami dirancang oleh para ahli untuk
                memberikan pelatihan yang berkualitas, relevan dan terupdate.
              </p>

              <router-link
                to="/register"
                class="btn-custom-mobile text-decoration-none"
                >Get Our Service</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-transform: capitalize;
  font-weight: 600;
  font-size: 70px;
}

h2 {
  text-transform: capitalize;
  font-weight: 600;
  font-size: 25px;
}

.mobile {
  margin-top: 60px;
}

.hero {
  margin-top: 100px;
}

.text-content {
  width: 600px;
}

@media (max-width: 500px) {
  .hero {
    margin-top: 10px;
  }

  .row-mobile {
    margin-top: 34px;
  }
}
</style>
