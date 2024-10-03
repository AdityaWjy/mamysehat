<template>
  <div class="program-detail">
    <div class="row my-4 gap-6">
      <div class="col-md-6">
        <img
          src="/favicon.ico"
          alt="image"
          class="img-fluid shadow-lg w-xl-75 h-100"
        />
      </div>

      <div class="col-md-5 d-flex align-items-center justify-items-center">
        <!-- form register -->
        <form @submit.prevent="registerUser" class="mt-3 mt-xl-0 ms-xl-5">
          <h3>Register Pengguna</h3>

          <div class="row mb-3">
            <div class="col-md-6">
              <label for="name" class="form-label fw-semibold"
                >Nama Lengkap:</label
              >
              <input v-model="name" type="text" class="form-control" required />
            </div>
            <div class="col-md-6">
              <label for="institusi" class="form-label fw-semibold"
                >Institusi:</label
              >
              <input
                v-model="institusi"
                type="text"
                class="form-control"
                required
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label for="email" class="form-label fw-semibold"
                >Alamat Email:</label
              >
              <input
                v-model="email"
                type="email"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="nik" class="form-label fw-semibold">NIK:</label>
              <input v-model="nik" type="text" class="form-control" required />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label for="wa" class="form-label fw-semibold"
                >No. WhatsApp:</label
              >
              <input v-model="wa" type="text" class="form-control" required />
            </div>
            <div class="col-md-6">
              <label for="kotaAsal" class="form-label fw-semibold"
                >Kota Asal:</label
              >
              <input
                v-model="kota_asal"
                type="text"
                class="form-control"
                required
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label for="profesi" class="form-label fw-semibold"
                >Profesi:</label
              >
              <input
                v-model="profesi"
                type="text"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="password" class="form-label fw-semibold"
                >Password:</label
              >
              <input
                v-model="password"
                type="password"
                class="form-control"
                required
              />
            </div>
          </div>

          <div class="row">
            <div class="col">
              <button type="submit" class="btn btn-primary w-100">
                Register
              </button>
              <p class="text-center mt-3">
                Already have an account?
                <router-link
                  to="/login"
                  class="text-decoration-none fw-semibold"
                  >Sign In</router-link
                >
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      institusi: "",
      email: "",
      nik: "",
      wa: "",
      kota_asal: "",
      profesi: "",
      password: "",
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/users", {
          name: this.name,
          institusi: this.institusi,
          email: this.email,
          nik: this.nik,
          wa: this.wa,
          kota_asal: this.kota_asal,
          profesi: this.profesi,
          password: this.password,
        });

        alert("Registration successful!");
        this.$router.push("/login"); // Redirect to login page after successful registration
      } catch (error) {
        console.error("Registration error:", error);
        alert("Failed to register. Please try again.");
      }
    },
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
}

.text-description {
  font-size: 13px;
}
</style>
