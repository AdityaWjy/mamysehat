<template>
  <div class="hero">
    <!-- Desktop Hero Display -->

    <div class="d-none d-md-block">
      <div class="row mt-4 ml-3">
        <div class="col-md-6">
          <div class="flex d-flex h-100 me-5">
            <div class="justify-content-center align-self-center">
              <h2>lembaga pelatihan yang berfokus pada kesehatan.</h2>

              <p
                class="capitalize fw-normal w-100 mt-3"
                style="font-size: 15px"
              >
                Academy ini bertujuan untuk meningkatkan standar pelayanan
                kesehatan dengan pengetahuan dan keterampilan praktisi kesehatan
                melalui program-program edukasi yang komprehensif dan inovatif.
              </p>
              <router-link
                to="/contact"
                class="text-white fw-semibold px-4 btn btn-primary text-decoration-none"
                >Hubungi Kami</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-md-6 d-flex justify-content-end align-self-center">
          <img src="/images/hero-about.png" width="450px" />
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
          <img src="/images/hero-about.png" width="310px" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center container">
              <h2 class="mt-3">
                lembaga pelatihan yang berfokus pada kesehatan.
              </h2>

              <p class="capitalize fw-normal" style="font-size: 14px">
                Academy ini bertujuan untuk meningkatkan standar pelayanan
                kesehatan dengan pengetahuan dan keterampilan praktisi kesehatan
                melalui program-program edukasi yang komprehensif dan inovatif.
              </p>

              <router-link
                to="/contact"
                class="btn-custom-mobile px-5 capitalize text-decoration-none"
                >Hubungi Kami</router-link
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

@media (max-width: 500px) {
  .hero {
    margin-top: 10px;
  }

  .row-mobile {
    margin-top: 34px;
  }
}
</style>
