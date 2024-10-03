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
      <div class="col-md-5">
        <h4 class="fw-semibold">{{ program.nama_acara }}</h4>
        <p class="text-description">{{ program.deskripsi }}</p>

        <div class="personal-information">
          <h4>Personal Information</h4>

          <ul class="list-unstyled">
            <li><span class="fw-bold">Lokasi:</span> {{ program.lokasi }}</li>
            <li>
              <span class="fw-bold">Tanggal Mulai:</span>
              {{ formatCustomDate(program.tgl_mulai) }}
            </li>
            <li>
              <span class="fw-bold">Harga Early Bird:</span>
              {{ formatCustomDate(program.tgl_early) }} -
              {{ formatCustomDate(program.tgl_akhir) }}
              {{ formatCurrency(program.harga_early) }}
            </li>
            <li>
              <span class="fw-bold">Harga Reguler:</span>
              {{ formatCustomDate(program.tgl_akhir) }} -
              {{ formatCustomDate(program.tgl_ditutup) }}
              {{ formatCurrency(program.harga_reguler) }}
            </li>
            <li>
              <span class="fw-bold">Contact Person: </span>
              <a
                :href="program.wa_link"
                target="_blank"
                class="text-dark text-decoration-none fw-medium"
              >
                Hashfi <span class="">0851-4300-0100</span>
              </a>
            </li>

            <li>
              <span class="fw-bold">Materi:</span>
              <ul class="list-unstyled">
                <li
                  v-for="(item, index) in materi"
                  :key="index"
                  class="list-group-item"
                >
                  {{ index + 1 }}. {{ item.materi }}
                </li>
              </ul>
            </li>
          </ul>
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
export default {
  data() {
    return {
      program: {}, // Menginisialisasi data program sebagai kosong
      imgSrc: "http://127.0.0.1:8000/storage/", // URL gambar dari Laravel
      materi: [], // Initialize as an empty array
    };
  },

  mounted() {
    this.fetchProgram();
  },

  methods: {
    formatCustomDate(date) {
      const dateObject = new Date(date);
      const day = dateObject.getDate().toString().padStart(2, "0");
      const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
      const year = dateObject.getFullYear();
      return `${day}/${month}/${year}`; // Format changed to DD/MM/YYYY
    },

    formatCurrency(value) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(value);
    },

    async fetchProgram() {
      try {
        const id = this.$route.params.id;

        if (id) {
          const token = localStorage.getItem("auth_token"); // Ambil token dari localStorage
          const response = await axios.get(
            `http://127.0.0.1:8000/api/acaras/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`, // Tambahkan token ke header
              },
            }
          );
          this.program = response.data.data;

          // Fetch materi setelah program dimuat
          this.fetchMateri(this.program.id);
        } else {
          console.error("Parameter id tidak tersedia");
        }
      } catch (error) {
        console.error(error);
      }
    },

    isAuthenticated() {
      // Cek apakah auth token ada di localStorage
      return localStorage.getItem("auth_token") !== null;
    },

    async routePendaftar() {
      const token = localStorage.getItem("auth_token");

      if (!token) {
        alert("Anda harus login terlebih dahulu untuk mendaftar.");
        this.$router.push("/login");
      } else {
        try {
          // get user id
          const userId = localStorage.getItem("user_id");
          const response = await axios.post(
            "http://127.0.0.1:8000/api/pendaftar",
            {
              user_id: userId, // Ganti sesuai dengan ID pengguna yang sesuai
              acara_id: this.program.id, // Gunakan ID acara dinamis
            },
            {
              headers: {
                Authorization: `Bearer ${token}`, // Tambahkan token ke header
              },
            }
          );
          console.log("Pendaftaran berhasil: ", response.data);

          // Buka URL pembayaran di tab baru
          const paymentURL = response.data.payment_url;
          if (paymentURL) {
            window.open(paymentURL, "_blank");
          } else {
            console.log("Payment URL tidak tersedia");
          }
        } catch (error) {
          console.error("Gagal mendaftar acara: ", error);
        }
      }
    },

    async fetchMateri(acaraId) {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/materi/${acaraId}`
        );
        console.log("Materi: ", response.data);

        // Sesuaikan dengan struktur respons API Anda
        this.materi = response.data.materi || []; // Pastikan ini adalah array
      } catch (error) {
        console.error("Gagal mengambil materi: ", error);
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
