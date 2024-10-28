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

              <p class="capitalize fw-normal w-75 mb-4" style="font-size: 18px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet nulla auctor,
                <span class="blueOcean font-bold">vestibulum</span> magna.
                <span class="blueOcean font-bold">vestibulum</span> magna sed,
                convallis ex.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet nulla auctor,
                <span class="blueOcean font-bold">vestibulum</span> magna.
                <span class="blueOcean font-bold">vestibulum</span> magna sed,
                convallis ex.
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

@media (max-width: 500px) {
  .hero {
    margin-top: 10px;
  }

  .row-mobile {
    margin-top: 34px;
  }
}
</style>
