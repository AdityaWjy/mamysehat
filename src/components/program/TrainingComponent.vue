<template>
  <div class="training">
    <div class="container mt-5">
      <h1 class="text-center text-xl-start blueOcean">Training</h1>

      <p class="capitalize text-center text-xl-start fw-normal text-content">
        Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit
        id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
        habitasse in velit fringilla feugiat senectus in.
      </p>

      <!-- List program training start -->

      <div
        class="d-flex flex-wrap align-items-center justify-content-start mt-5 gap-5"
      >
        <div
          class="text-white rounded px-5 py-5 position-relative"
          style="width: 20rem; background-color: #1e293b"
        >
          <!-- Badge bulat di ujung kanan atas -->
          <div
            class="badge-circle position-absolute top-0 end-0 bg-danger"
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

          <h1 class="title">Seminar Kesehatan</h1>
          <p class="grayOcean">Tanggal 17/08/2024 pada Balai Kota Surabaya</p>
          <button class="btn-custom w-100">Read More</button>
        </div>

        <div
          class="text-white rounded px-5 py-5"
          style="width: 23rem; background-color: #1e293b"
        >
          <h1 class="title">Workshop</h1>

          <p class="grayOcean">Tanggal 17/08/2024 pada Balai Kota Surabaya</p>

          <button class="btn-custom w-100">Read More</button>
        </div>
      </div>

      <!-- List program training end -->

      <h1 class="text-center text-xl-start blueOcean mt-5">Webinar</h1>

      <p class="capitalize text-center text-xl-start fw-normal text-content">
        Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit
        id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
        habitasse in velit fringilla feugiat senectus in.
      </p>

      <!-- List program webinar start -->

      <div
        class="d-flex flex-wrap align-items-center justify-content-start mt-5 gap-5"
      >
        <div
          class="text-white rounded px-5 py-5 position-relative"
          style="width: 20rem; background-color: #1e293b"
        >
          <!-- Badge bulat di ujung kanan atas -->
          <div
            class="badge-circle position-absolute top-0 end-0 bg-danger"
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

          <h1 class="title">Webinar Online</h1>
          <p class="grayOcean">Tanggal 17/08/2024 pada Balai Kota Surabaya</p>
          <button class="btn-custom w-100">Read More</button>
        </div>

        <div
          class="text-white rounded px-5 py-5"
          style="width: 23rem; background-color: #1e293b"
        >
          <h1 class="title">webinar Offline</h1>

          <p class="grayOcean">Tanggal 17/08/2024 pada Balai Kota Surabaya</p>

          <button class="btn-custom w-100">Read More</button>
        </div>
      </div>

      <!-- List program training end -->
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.training {
  margin-top: 100px;
}

.title {
  font-size: 27px;
  text-align: justify;
}

.text-content {
  width: 50%;
}

@media (max-width: 500px) {
  .text-content {
    width: 100%;
  }
}
</style>
