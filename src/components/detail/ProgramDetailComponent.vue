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
                  v-for="materiAcara in program.materis"
                  :key="materiAcara.id"
                  class="list-group-item"
                >
                  {{ materiAcara.materi }}
                </li>
              </ul>

              <ul class="list-unstyled">
                <li>
                  <span class="fw-bold">Fasilitas:</span>
                  <ul class="list-unstyled">
                    <li
                      v-for="fasilitasAcara in program.fasilitas"
                      :key="fasilitasAcara.id"
                      class="list-group-item"
                    >
                      {{ fasilitasAcara.fasilitas }}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- Tombol pendaftaran hanya akan ditampilkan jika user belum terdaftar dan belum membayar -->
        <button
          v-if="!isRegistered"
          type="submit"
          @click="routePendaftar"
          class="btn btn-primary w-100 fw-semibold"
        >
          Ikut Program Acara
        </button>
        <p v-else class="text-danger">
          Anda sudah terdaftar dan telah membayar.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      program: {
        materi: [],
        fasilitas: [],
      },
      imgSrc: "http://127.0.0.1:8000/storage/",
      isRegistered: false, // Menyimpan status pendaftaran
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
      return `${day}/${month}/${year}`;
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
        const token = localStorage.getItem("auth_token");

        if (id) {
          const response = await axios.get(
            `http://127.0.0.1:8000/api/acaras/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          this.program = response.data.data;

          // Memeriksa status pendaftaran untuk acara ini
          const userId = localStorage.getItem("user_id");

          const registrationResponse = await axios.get(
            `http://127.0.0.1:8000/api/pendaftar?user_id=${userId}&acara_id=${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          this.isRegistered = registrationResponse.data.data.some(
            (pendaftar) => pendaftar.status === "terbayar"
          );
        } else {
          console.error("Parameter id tidak tersedia");
        }
      } catch (error) {
        console.error(error);
      }
    },

    isAuthenticated() {
      return localStorage.getItem("auth_token") !== null;
    },

    async routePendaftar() {
      const token = localStorage.getItem("auth_token");

      if (!token) {
        alert("Anda harus login terlebih dahulu untuk mendaftar.");
        this.$router.push("/login");
      } else {
        try {
          const userId = localStorage.getItem("user_id");
          const response = await axios.post(
            "http://127.0.0.1:8000/api/pendaftar",
            {
              user_id: userId,
              acara_id: this.program.id,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("Pendaftaran berhasil: ", response.data);

          const paymentURL = response.data.payment_url;
          if (paymentURL) {
            // if payment url tersedia maka open new tab
            window.open(paymentURL, "_blank");
          } else {
            console.log("Payment URL tidak tersedia");
          }
        } catch (error) {
          alert("Anda sudah mendaftar");
        }
      }
    },
  },
};
</script>
