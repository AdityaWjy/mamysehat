<template>
  <div class="program-detail">
    <div class="row my-5 gap-6">
      <div class="col-md-6">
        <img
          src="/favicon.ico"
          alt="image"
          class="img-fluid shadow-lg w-xl-75 h-100"
        />
      </div>

      <div class="col-md-5 d-flex align-items-center justify-items-center">
        <!-- form login -->

        <form class="mt-3 mt-xl-0 ms-xl-5">
          <h3>Login Pengguna</h3>

          <div class="row mb-3">
            <div class="col-md-6">
              <label
                for="namaLengkap"
                class="form-label fw-semibold border-dark-subtle"
                style="font-size: 14px"
                >Nama Lengkap:</label
              >
              <input
                type="text"
                class="form-control border border-dark-subtle"
                id="namaLengkap"
                required
              />
            </div>
            <div class="col-md-6">
              <label
                for="institusi"
                class="form-label fw-semibold"
                style="font-size: 14px"
                >Institusi:</label
              >
              <input
                type="text"
                class="form-control border border-dark-subtle"
                id="institusi"
                required
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label
                for="email"
                class="form-label fw-semibold border-dark-subtle"
                style="font-size: 14px"
                >Alamat Email:</label
              >
              <input
                type="email"
                class="form-control border border-dark-subtle"
                id="email"
                required
              />
            </div>
            <div class="col-md-6">
              <label
                for="nik"
                class="form-label fw-semibold"
                style="font-size: 14px"
                >NIK:</label
              >
              <input
                type="text"
                class="form-control border border-dark-subtle"
                id="nik"
                required
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label
                for="whatsapp"
                class="form-label fw-semibold border-dark-subtle"
                style="font-size: 14px"
                >No. WhatsApp:</label
              >
              <input
                type="text"
                class="form-control border border-dark-subtle"
                id="whatsapp"
                required
              />
            </div>
            <div class="col-md-6">
              <label
                for="kotaAsal"
                class="form-label fw-semibold"
                style="font-size: 14px"
                >Kota Asal:</label
              >
              <input
                type="text"
                class="form-control border border-dark-subtle"
                id="kotaAsal"
                required
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label
                for="profesi"
                class="form-label fw-semibold border-dark-subtle"
                style="font-size: 14px"
                >Profesi:</label
              >
              <input
                type="text"
                class="form-control border border-dark-subtle"
                id="profesi"
                required
              />
            </div>
            <div class="col-md-6">
              <label
                for="password"
                class="form-label fw-semibold"
                style="font-size: 14px"
                >Password:</label
              >
              <input
                type="password"
                class="form-control border border-dark-subtle"
                id="kotaAsal"
                required
              />
            </div>
          </div>

          <div class="row">
            <div class="col">
              <button type="submit" class="btn btn-primary w-100">Login</button>
              <p class="text-center mt-3 mt-x-0">
                Don't have an account?
                <router-link
                  to="/register"
                  class="text-decoration-none fw-semibold"
                  >Sign Up</router-link
                >
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- Jika Anda ingin menampilkan detail program secara lebih lengkap, Anda bisa menambahkan konten lainnya di sini -->
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.text-description {
  font-size: 15px;
}

@media (max-width: 500px) {
  .program-detail {
    margin-top: 100px;
  }

  .text-description {
    font-size: 13px;
  }
}
</style>
