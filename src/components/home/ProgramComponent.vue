<template>
  <div class="program-component mb-5">
    <div
      class="d-flex align-items-center justify-items-center flex-column text-center"
    >
      <h1 class="blueOcean font-semibold">Program</h1>
      <p class="capitalize text-center fw-normal text-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
        nulla auctor,
        <span class="blueOcean font-bold">vestibulum</span> magna.
        <span class="blueOcean font-bold">vestibulum</span> magna sed, convallis
        ex.
      </p>
    </div>

    <!-- program -->

    <div
      class="d-flex flex-column flex-xl-row mt-2 mt-xl-4 align-items-center justify-content-center gap-1 gap-xl-5"
    >
      <div class="background-box mb-2 mb-xl-0">
        <div class="d-flex rounded" style="background-color: #1e293b">
          <div class="img">
            <img src="/images/training.png" class="rounded" alt="Training" />
          </div>
          <div class="py-2 px-2 p-xl-3">
            <h2 class="text-white font-semibold">Webinar</h2>
            <p class="text-white-50 content-program">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button class="btn-custom-mobile">Read More</button>
          </div>
        </div>
      </div>
      <div class="background-box">
        <div class="d-flex rounded" style="background-color: #1e293b">
          <div class="img">
            <img src="/images/training.png" alt="Training" />
          </div>
          <div class="py-2 px-2 p-xl-3">
            <h2 class="text-white font-semibold">Training</h2>
            <p class="text-white-50 content-program">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button class="btn-custom-mobile">Read More</button>
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
  font-size: 18px;
}

img {
  width: 200px;
  height: 200px;
}

.background-box {
  width: 460px;
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
