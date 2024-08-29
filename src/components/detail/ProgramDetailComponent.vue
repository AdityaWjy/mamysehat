<template>
  <div class="program-detail">
    <div class="row my-5 gap-5">
      <div class="col-md-6">
        <img
          :src="imgSrc + program.gambar"
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

        <button
          type="submit"
          @click="routePendaftar"
          class="btn btn-primary w-100 fw-semibold"
        >
          Ikut Program Acara
        </button>
      </div>
    </div>

    <!-- Jika Anda ingin menampilkan detail program secara lebih lengkap, Anda bisa menambahkan konten lainnya di sini -->
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import { routePendaftar } from "../../services/api";

export default {
  data() {
    return {
      program: {}, // Menginisialisasi data program sebagai kosong
      imgSrc: "http://127.0.0.1:8000/storage/", //connect to url image laravel
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

    // route pendaftar

    async routePendaftar() {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/pendaftar",
          {
            user_id: 1,
            acara_id: 3,
          }
        );
        console.log("Pendaftaran berhasil: ", response.data);

        // Open URL in another tab
        const paymentURL = response.data.payment_url;
        if (paymentURL) {
          window.open(paymentURL, "_blank");
        } else {
          console.log("Payment URL tidak tersedia");
        }
      } catch (error) {
        console.error("Gagal mendaftar acara: ", error);
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
