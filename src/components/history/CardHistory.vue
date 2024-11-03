<template>
  <div class="card-history">
    <div
      class="card-body card text-bg-dark text-white rounded position-relative"
      style="background-color: #ffff"
    >
      <div class="m-auto">
        <img :src="imgSrc + history.gambar" alt="" class="mb-3" />

        <h3 class="title">{{ history.nama_acara }}</h3>

        <span class="font-small"
          >Didaftarkan pada: {{ formatCustomDate(history.created_at) }}</span
        >
        <br />
        <br />

        <span class="font-small">
          Tanggal mulai acara: {{ formatCustomDate(history.tgl_mulai) }}</span
        >
        <br />

        <span class="font-small"> Lokasi Acara: {{ history.lokasi }}</span>
        <br />

        <br />
        <a
          href="https://wa.me/+6285143000100"
          target="_blank"
          class="text-decoration-none fw-medium text-white font-small"
        >
          CP: Hashfi 0851-4300-0100
        </a>

        <br />

        <a
          :href="history.wa_link"
          target="_blank"
          class="underline fw-medium text-white font-small"
        >
          Link Whatsapp
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mamyApiImg } from "../../services/api";
export default {
  data() {
    return {
      imgSrc: `${mamyApiImg}`,
    };
  },

  props: {
    history: {
      type: Object,
      required: true,
    },
  },

  methods: {
    formatCustomDate(date) {
      const dateObject = new Date(date);
      const day = dateObject.getDate().toString().padStart(2, "0");
      const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
      const year = dateObject.getFullYear();
      return `${day}/${month}/${year}`;
    },
  },
};
</script>

<style scoped>
.card-body {
  width: 20rem;
}

img {
  width: 100%;
  height: auto;
  max-width: 100%;
  object-fit: contain; /* atau "cover" jika ingin mengisi area gambar */
}

.title {
  font-size: 18px;
}

.font-small {
  font-size: 13px;
}

@media (max-width: 500px) {
  .card-body {
    width: 20rem;
  }
}
</style>
