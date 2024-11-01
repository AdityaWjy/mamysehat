<template>
  <div class="contact">
    <div class="container mt-4">
      <div class="row d-flex align-items-center justify-content-between">
        <!-- Google Maps Embed -->
        <div class="col-md-6 mb-4 order-1 order-md-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2950165410434!2d112.74437507476108!3d-7.320720992687424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb1115f1e9bb%3A0x1028ea492394b269!2sEl%20Shafi!5e0!3m2!1sid!2sid!4v1724761869739!5m2!1sid!2sid"
            width="100%"
            height="350"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <!-- Contact Information -->
        <div class="col-md-5 contact-page order-2 order-md-1">
          <h3 class="text-center text-xl-start blueOcean">Hubungi Kami</h3>
          <p class="text-center text-xl-start">
            In its service to provide the best for you. Contact us if you have
            any questions or complaints to submit.
          </p>
          <ul class="list-unstyled">
            <li
              class="mb-3 d-flex d-xl-block flex-column flex-md-row align-items-center justify-content-center"
            >
              <img
                src="../contact/assets/instagram.png"
                width="32"
                height="32"
                class="me-2 mb-2 mb-md-0"
              />
              <a
                href="https://www.instagram.com/mamysehatacademy.id/"
                class="text-decoration-none text-dark"
                target="_blank"
                >mamysehatacademy.id</a
              >
            </li>
            <li
              class="mb-3 d-flex d-xl-block flex-column flex-md-row align-items-center justify-content-center"
            >
              <img
                src="../contact/assets/envelope-plus.png"
                width="25"
                class="me-2 mb-2 mb-md-0 ms-xl-1"
              />
              <a
                href="mailto:info.mamysehatacademy@gmail.com"
                class="text-decoration-none text-dark ms-xl-1"
                target="_blank"
                >info.mamysehatacademy@gmail.com</a
              >
            </li>
            <li
              class="mb-3 d-flex d-xl-block flex-column flex-md-row align-items-center justify-content-center"
            >
              <img
                src="../contact/assets/phone.png"
                width="25"
                class="me-2 mb-2 mb-md-0 ms-xl-1"
              />
              <a
                href="https://wa.me/+6285143000100"
                class="text-decoration-none text-dark ms-xl-1"
                target="_blank"
                >+62 851-4300-0100</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h4 {
  margin-bottom: 20px;
}

.container {
  margin-top: 100px;
}

.contact {
  margin-top: 100px;
  margin-bottom: 50px;
}
</style>
