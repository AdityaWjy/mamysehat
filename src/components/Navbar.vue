<template>
  <div class="navbar-component">
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-white fixed-top">
        <div class="container-fluid">
          <router-link to="/">
            <img :src="logoSrc" alt="Gafin Labs" class="Logo" />
          </router-link>

          <button
            class="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex ms-auto" role="navbar">
              <ul class="navbar-nav me-auto mb-2 md:px-5 mb-lg-0 gap-lg-4">
                <li class="nav-item">
                  <router-link
                    to="/"
                    class="nav-link fw-medium"
                    aria-current="page"
                    >Home</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link
                    to="/about"
                    class="nav-link fw-medium"
                    aria-current="page"
                    >About</router-link
                  >
                </li>

                <li class="nav-item">
                  <router-link
                    to="/program"
                    class="nav-link fw-medium"
                    aria-current="page"
                    >Program</router-link
                  >
                </li>

                <li class="nav-item">
                  <router-link
                    to="/contact"
                    class="nav-link fw-medium"
                    aria-current="page"
                    >Contact Us</router-link
                  >
                </li>

                <!-- Tampilkan Login atau Logout berdasarkan status otentikasi -->
                <li class="nav-item" v-if="!isAuthenticated">
                  <router-link
                    to="/login"
                    class="nav-link fw-medium"
                    aria-current="page"
                    >Login</router-link
                  >
                </li>

                <li class="nav-item dropdown" v-if="isAuthenticated">
                  <div class="dropdown">
                    <button
                      class="btn border-0 btn-primary dropdown-toggle"
                      type="button"
                      id="userDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {{ username }}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="userDropdown">
                      <li>
                        <button @click="logout" class="dropdown-item py-0">
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import logo from "../assets/NavbarLogo.png";

export default {
  data() {
    return {
      logoSrc: logo,
      username: localStorage.getItem("name") || "",
      dropdownVisible: false,
    };
  },
  computed: {
    isAuthenticated() {
      return localStorage.getItem("auth_token") !== null; // Periksa keberadaan token
    },
  },
  methods: {
    // toggle dropdown
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },

    // logout function
    logout() {
      console.log("Logout button clicked");
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user_id");
      localStorage.removeItem("name");

      alert("Anda telah berhasil logout."); // Konfirmasi logout
      // Reload halaman untuk memastikan status di-reset
      location.reload();

      // Memaksa Vue untuk merender ulang navbar
      this.$forceUpdate();

      if (this.$route.path !== "/") {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.Logo {
  width: 180px;
}

.nav-link.router-link-exact-active {
  color: #2d90dc;
  font-weight: 500;
}

.custom-toggler {
  border-color: #2d90dc; /* Red Border */
}

.custom-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(45, 144, 220, 1)' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.custom-toggler:focus,
.custom-toggler:active {
  outline: none;
  box-shadow: 0 0 5px #2d90dc; /* Red Shadow */
}

@media (min-width: 992px) {
  .fixed-top {
    position: initial !important; /* Reset fixed position for desktop */
  }
}

.pointer {
  cursor: pointer;
}
</style>
