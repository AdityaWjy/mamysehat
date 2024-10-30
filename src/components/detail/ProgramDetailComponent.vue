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
            <li><span class="fw-bold">Lokasi:</span></li>
            <li class="mb-2">
              {{ program.lokasi }}
            </li>
            <li>
              <span class="fw-bold">Tanggal Mulai Acara:</span>
            </li>
            <li class="mb-2">
              {{ formatCustomDate(program.tgl_mulai) }}
            </li>
            <li>
              <span class="fw-bold">Harga Early Bird Sampai:</span>
            </li>
            <li class="mb-2">
              {{ formatCustomDate(program.tgl_early) }}
              ( {{ formatCurrency(program.harga_early) }} )
            </li>
            <li>
              <span class="fw-bold">Harga Reguler:</span>
            </li>
            <li class="mb-2">
              {{ formatCurrency(program.harga_reguler) }}
            </li>

            <li>
              <span class="fw-bold">Harga Spesialis:</span>
            </li>
            <li class="mb-2">
              {{ formatCurrency(program.harga_spesialis) }}
            </li>

            <li>
              <span class="fw-bold">Contact Person: </span>
            </li>
            <li class="mb-2">
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
                  v-for="(materiAcara, index) in program.materis"
                  :key="materiAcara.id"
                  class="list-group-item mb-2"
                >
                  {{ index + 1 }}. {{ materiAcara.materi }}
                </li>
              </ul>

              <ul class="list-unstyled">
                <li>
                  <span class="fw-bold">Fasilitas:</span>
                  <ul class="list-unstyled">
                    <li
                      v-for="(fasilitasAcara, index) in program.fasilitas"
                      :key="fasilitasAcara.id"
                      class="list-group-item"
                    >
                      {{ index + 1 }}. {{ fasilitasAcara.fasilitas }}
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
import { mamyApi } from "../../services/api";
import { mamyApiImg } from "../../services/api";
import axios from "axios";
export default {
  data() {
    return {
      program: {
        materi: [],
        fasilitas: [],
      },
      imgSrc: `${mamyApiImg}`,
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
          const response = await axios.get(`${mamyApi}acaras/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.program = response.data.data;

          // Memeriksa status pendaftaran untuk acara ini
          const userId = localStorage.getItem("user_id");
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
          console.log(userId);
          const response = await axios.post(
            `${mamyApi}pendaftar`,
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
            // Jika payment URL tersedia, buka tab baru
            window.open(paymentURL, "_blank");
          } else {
            console.log("Payment URL tidak tersedia");
          }

          // Redirect ke halaman /history setelah pendaftaran berhasil
          this.$router.push("/history");
        } catch (error) {
          if (error.response && error.response.status === 409) {
            alert("Kamu sudah mendaftar untuk acara ini.");
          }
          if (error.response && error.response.status === 403) {
            alert("Acara tidak aktif atau sudah ditutup");
          } else {
            console.log(
              "Error pendaftaran: ",
              error.response ? error.response.data : error
            );
            alert("Gagal mendaftar acara");
          }
        }
      }
    },
  },
};
</script>
