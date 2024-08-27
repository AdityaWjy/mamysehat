<template>
  <div class="program-detail">
    <div class="row my-5 gap-5">
      <div class="col-md-6">
        <img
          src="./details.png"
          alt="image"
          class="img-fluid shadow-lg w-100 h-100"
        />
      </div>
      <div class="col-md-5 mt-">
        <h4 class="fw-semibold">{{ program.nama_acara }}</h4>
        <p class="text-description">{{ program.deskripsi }}</p>

        <div class="personal-information">
          <h4>Personal Information</h4>
          <p class="text-description">
            Acara {{ program.nama_acara }} dimulai pada tanggal
            <span class="fw-semibold">{{
              formatCustomDate(program.tgl_mulai)
            }}</span>
            bertempat pada
            <span class="fw-semibold">{{ program.lokasi }}</span> dengan harga
            <span class="fw-semibold">{{ hargaSekarang | currency }}</span> dan
            acara akan diakhiri pada tanggal
            <span class="fw-semibold">{{
              formatCustomDate(program.tgl_akhir)
            }}</span>

            <br />

            <span class="fw-semibold"
              >Contact Person:
              <a :href="program.wa_link" target="_blank" class="text-dark"
                >PT. Mamy Sehat Indonesia</a
              >
            </span>
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
import moment from "moment";

export default {
  data() {
    return {
      program: {}, // Menginisialisasi data program sebagai kosong
    };
  },

  mounted() {
    this.fetchProgram();
  },

  computed: {
    hargaSekarang() {
      const today = new Date();
      const tglEarly = new Date(this.program.tgl_early);

      // check apakah hari ini masih di periode harga early
      if (today <= tglEarly) {
        return this.program.harga_early;
      } else {
        return this.program.harga_reguler;
      }
    },
  },

  methods: {
    formatCustomDate(date) {
      const dateObject = new Date(date);
      const year = dateObject.getFullYear();
      const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
      const day = dateObject.getDate().toString().padStart(2, "0");
      return `${year}/${month}/${day}`;
    },

    async fetchProgram() {
      try {
        const id = this.$route.params.id;

        if (id) {
          const response = await axios.get(
            `http://127.0.0.1:8000/api/acaras/${id}`
          );
          this.program = response.data.data;
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
