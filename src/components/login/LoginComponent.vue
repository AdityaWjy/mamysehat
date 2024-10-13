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
        <form @submit.prevent="loginUser" class="mt-3 mt-xl-0 ms-xl-5">
          <h3>Login Pengguna</h3>

          <div class="row mb-3">
            <div class="col-md-6">
              <label
                for="email"
                class="form-label fw-semibold border-dark-subtle"
                style="font-size: 14px"
                >Alamat Email:</label
              >
              <input
                v-model="email"
                type="email"
                class="form-control border border-dark-subtle"
                id="email"
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
                v-model="password"
                type="password"
                class="form-control border border-dark-subtle"
                id="password"
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
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/login", {
          email: this.email,
          password: this.password,
        });

        // Simpan token ke localStorage
        localStorage.setItem("auth_token", response.data.token);
        // Simpan user ID ke localStorage
        localStorage.setItem("user_id", response.data.user_data.id);

        // Redirect ke halaman setelah login sukses
        this.$router.push("/");
      } catch (error) {
        console.error("Login gagal:", error);
        alert("Email atau password salah.");
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

  .text-description {
    font-size: 13px;
  }
}
</style>
