<template>
  <div class="testimoni">
    <div
      class="d-flex align-items-center justify-items-center flex-column text-center"
    >
      <h1 class="blueOcean font-semibold">Testimoni</h1>
      <p class="capitalize text-center fw-normal text-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
        nulla auctor,
        <span class="blueOcean font-bold">vestibulum</span> magna.
        <span class="blueOcean font-bold">vestibulum</span> magna sed, convallis
        ex.
      </p>
    </div>

    <div
      class="d-flex flex-column flex-xl-row mt-2 mt-xl-4 align-items-center justify-content-center gap-1 gap-xl-5 mb-5"
    >
      <div class="background-box mb-2 mb-xl-0">
        <div class="d-flex rounded" style="background-color: #1e293b">
          <div class="py-2 px-2 p-xl-3">
            <p class="blueOcean content-program">Sarah Dayon</p>
            <p class="text-white-50 mb-2 content-program">
              Staff Engineer, Algolia
            </p>
            <p class="text-white content-program">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor. Sed sit amet nulla auctor.
            </p>
          </div>
        </div>
      </div>
      <div class="background-box mb-2 mb-xl-0">
        <div class="d-flex rounded" style="background-color: #1e293b">
          <div class="py-2 px-2 p-xl-3">
            <p class="blueOcean content-program">Sarah Dayon</p>
            <p class="text-white-50 mb-2 content-program">
              Staff Engineer, Algolia
            </p>
            <p class="text-white content-program fw-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor. Sed sit amet nulla auctor.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background-box {
  width: 460px;
}

.text-content {
  width: 800px;
  font-size: 18px;
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

  h2 {
    font-size: 10px;
  }

  .content-program {
    font-size: 10px;
    margin-bottom: 0px;
  }

  .background-box {
    width: 310px;
  }
}
</style>
