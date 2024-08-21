<template>
  <div class="program-detail">
    <div class="row my-5 gap-5">
      <div class="col-md-6">
        <img
          :src="'/images/program/' + program.image"
          alt="image"
          class="img-fluid shadow-lg w-100 h-100"
        />
      </div>
      <div class="col-md-5 mt-">
        <h2>{{ program.title }}</h2>
        <p class="text-description">{{ program.description }}</p>

        <div class="personal-information">
          <h4>Personal Information</h4>
          <p class="text-description">
            Untuk pendaftaran bisa mengisi data dibawa ini. Pembayaran dilakukan
            via transfer ke nomor rekening berikut:
            <span class="fw-bold">142-0088-111-777</span> (Bank Mandiri) a/n
            <span class="fw-bold">PT. Mamy Sehat Indonesia</span>
          </p>
        </div>

        <form>
          <div class="row mb-3">
            <div class="col-md-6">
              <label
                for="namaLengkap"
                class="form-label fw-semibold border-dark-subtle"
                style="font-size: 14px"
                >Nama Lengkap & Gelar:</label
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
                for="email"
                class="form-label fw-semibold"
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
          </div>

          <div class="row mb-3">
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
                placeholder=""
                required
              />
            </div>
            <div class="col-md-6">
              <label
                for="noWa"
                class="form-label fw-semibold"
                style="font-size: 14px"
                >No. WhatsApp:</label
              >
              <input
                type="text"
                class="form-control border border-dark-subtle"
                id="noWa"
                placeholder=""
                required
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label
                for="AsalInstuisi"
                class="form-label fw-semibold"
                style="font-size: 14px"
                >Asal Institusi:</label
              >
              <input
                type="text"
                class="form-control border border-dark-subtle"
                id="AsalInstuisi"
                placeholder=""
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
                placeholder=""
                required
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label
                for="profesi"
                class="form-label fw-semibold"
                style="font-size: 14px"
                >Profesi:</label
              >
              <input
                type="text"
                class="form-control border border-dark-subtle"
                id="profesi"
                placeholder=""
                required
              />
            </div>
            <div class="col-md-6">
              <label
                for="buktiBayar"
                class="form-label fw-semibold"
                style="font-size: 14px"
                >Bukti Pembayaran:</label
              >
              <input
                type="file"
                class="form-control border border-dark-subtle"
                id="buktiBayar"
                placeholder=""
                required
              />
            </div>
          </div>

          <div class="row">
            <div class="col">
              <button type="submit" class="btn btn-primary w-100 fw-semibold">
                Submit
              </button>
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

export default {
  data() {
    return {
      program: {}, // Menginisialisasi data program sebagai kosong
    };
  },

  mounted() {
    this.fetchProgram();
  },

  methods: {
    async fetchProgram() {
      try {
        const id = this.$route.params.id;

        if (id) {
          const response = await axios.get(
            `http://localhost:3000/programs/${id}`
          );
          this.program = response.data;
        } else {
          console.error("Parameter id tidak tersedia");
        }
      } catch (error) {
        console.error(error);
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
