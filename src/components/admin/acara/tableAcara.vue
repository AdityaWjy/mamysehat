<template>
  <div class="table-responsive-container">
    <button @click="showCreateModal" class="btn btn-primary mb-3">
      Tambah Acara
    </button>
    <table class="table table-striped table-hover">
      <thead>
        <tr class="table-primary">
          <th scope="col">No</th>
          <th scope="col">Nama</th>
          <th scope="col" style="width: 300px">Deskripsi</th>
          <th scope="col">Gambar</th>
          <th scope="col">Tgl Mulai</th>
          <th scope="col">Tgl Akhir</th>
          <th scope="col">Tgl Ditutup</th>
          <th scope="col">Lokasi</th>
          <th scope="col">Status</th>
          <th scope="col">Harga Early</th>
          <th scope="col">Harga Reguler</th>
          <th scope="col">Tgl Early</th>
          <th scope="col">WA</th>
          <th scope="col">Materi</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(acara, index) in acaras" :key="acara.id">
          <th scope="row" class="text-center">{{ index + 1 }}</th>
          <td>{{ acara.nama_acara }}</td>
          <td class="description">
            {{ acara.deskripsi }}
          </td>
          <td>
            <img
              :src="imgSrc + acara.gambar"
              alt="Gambar Acara"
              class="img-thumbnail"
            />
          </td>
          <td>{{ acara.tgl_mulai }}</td>
          <td>{{ acara.tgl_akhir }}</td>
          <td>{{ acara.tgl_ditutup }}</td>
          <td>{{ acara.lokasi }}</td>
          <td>{{ acara.status }}</td>
          <td>{{ acara.harga_early }}</td>
          <td>{{ acara.harga_reguler }}</td>
          <td>{{ acara.tgl_early }}</td>
          <td>{{ acara.wa_link }}</td>
          <td>
            <!-- Button to fetch materi -->
            <button
              class="btn btn-primary btn-sm"
              @click="fetchMateri(acara.id)"
            >
              List Materi
            </button>
            <!-- list materi -->

            <ul class="list-group mt-3 text-dark">
              <li
                v-for="item in materi"
                :key="item.id"
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                {{ item.materi }}
                <button
                  class="mx-3 btn btn-danger btn-sm"
                  @click="deleteMateri(item.id)"
                >
                  Hapus
                </button>
              </li>
            </ul>
          </td>

          <td class="d-flex gap-1">
            <button @click="showEditModal(acara)" class="btn btn-warning">
              Edit
            </button>
            <button @click="deleteAcara(acara.id)" class="btn btn-danger">
              Hapus
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal for Create/Edit -->
    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">
            {{ isEditing ? "Edit Acara" : "Tambah Acara" }}
          </h2>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            @click="closeModal"
          ></button>
        </div>

        <div class="modal-body">
          <form @submit.prevent="isEditing ? updateAcara() : createAcara()">
            <div class="d-flex gap-3">
              <!-- nama -->
              <div class="form-group w-50">
                <label for="nama" class="mb-2">Nama acara</label>
                <input
                  type="text"
                  class="form-control"
                  id="nama"
                  placeholder="Pelatihan ibu kandungan"
                  required
                  v-model="form.nama_acara"
                />
              </div>
              <!-- gambar -->
              <div class="form-group w-50">
                <label for="gambar" class="mb-2">Gambar acara</label>
                <input
                  type="file"
                  class="form-control"
                  id="gambar"
                  @change="handleFileChange"
                />
              </div>
            </div>

            <div class="d-flex mt-3 gap-3">
              <!-- tanggal mulai -->
              <div class="form-group w-50">
                <label for="tglMulai" class="mb-2">Tanggal Mulai</label>
                <input
                  type="date"
                  class="form-control"
                  id="tglMulai"
                  required
                  v-model="form.tgl_mulai"
                />
              </div>

              <div class="form-group w-50">
                <label for="tglAkhir" class="mb-2">Tanggal Akhir</label>
                <input
                  type="date"
                  class="form-control"
                  id="tglAkhir"
                  required
                  v-model="form.tgl_akhir"
                />
              </div>
            </div>

            <div class="d-flex mt-3 gap-3">
              <!-- tanggal ditutup -->
              <div class="form-group w-50">
                <label for="tglDitutup" class="mb-2">Tanggal Ditutup</label>
                <input
                  type="date"
                  class="form-control"
                  id="tglDitutup"
                  required
                  v-model="form.tgl_ditutup"
                />
              </div>

              <!-- tanggal early -->
              <div class="form-group w-50">
                <label for="tglEarly" class="mb-2">Tanggal Early</label>
                <input
                  type="date"
                  class="form-control"
                  id="tglEarly"
                  required
                  v-model="form.tgl_early"
                />
              </div>
            </div>

            <div class="d-flex mt-3 gap-3">
              <!-- status -->
              <div class="form-group w-50">
                <label for="status" class="mb-2">Status acara</label>
                <select
                  class="form-control"
                  id="status"
                  v-model="form.status"
                  required
                >
                  <option value="aktif">Aktif</option>
                  <option value="tidak-aktif">Tidak Aktif</option>
                </select>
              </div>

              <!-- lokasi -->
              <div class="form-group w-50">
                <label for="lokasi" class="mb-2">Lokasi acara</label>
                <input
                  type="text"
                  class="form-control"
                  id="lokasi"
                  required
                  v-model="form.lokasi"
                />
              </div>
            </div>

            <div class="d-flex mt-3 gap-3">
              <!-- harga early -->
              <div class="form-group w-50">
                <label for="hargaEarly" class="mb-2">Harga Early</label>
                <input
                  type="number"
                  class="form-control"
                  id="hargaEarly"
                  required
                  v-model="form.harga_early"
                />
              </div>
              <!-- harga reguler -->
              <div class="form-group w-50">
                <label for="hargaReguler" class="mb-2">Harga Reguler</label>
                <input
                  type="number"
                  class="form-control"
                  id="hargaReguler"
                  required
                  v-model="form.harga_reguler"
                />
              </div>
            </div>

            <div class="d-flex mt-3 gap-3">
              <!-- nomor whatsapp -->
              <div class="form-group w-50">
                <label for="wa" class="mb-2">Nomor Whatsapp</label>
                <input
                  type="text"
                  class="form-control"
                  id="wa"
                  required
                  v-model="form.wa_link"
                />
              </div>
              <!-- deskripsi -->
              <div class="form-group w-50 mb-2">
                <label for="deskripsi" class="mb-2">Deskripsi Acara</label>
                <textarea
                  id="deskripsi"
                  class="form-control"
                  v-model="form.deskripsi"
                  required
                ></textarea>
              </div>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                @click="closeModal"
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary w-25">
                {{ isEditing ? "Update" : "Simpan" }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Modal for Materi -->
    <div v-if="isMateriModalOpen" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">Materi Acara</h2>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            @click="isMateriModalOpen = false"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addMateri">
            <div class="form-group">
              <label for="newMateri">Materi</label>
              <input
                type="text"
                class="form-control"
                id="newMateri"
                v-model="newMateri"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary mt-2">
              Tambah Materi
            </button>
          </form>
          <ul class="list-group mt-3">
            <li
              v-for="item in materi"
              :key="item.id"
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              {{ item.materi }}
              <button
                class="btn btn-danger btn-sm"
                @click="deleteMateri(item.id)"
              >
                Hapus
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { postAcara, updateAcara } from "../../../services/api";

export default {
  data() {
    return {
      acaras: [],
      materi: [],
      isModalOpen: false,
      isEditing: false,
      selectedAcaraId: null,
      isMateriModalOpen: false,
      newMateri: "",
      form: {
        id: null,
        nama_acara: "",
        deskripsi: "",
        gambar: null,
        tgl_mulai: "",
        tgl_akhir: "",
        tgl_ditutup: "",
        lokasi: "",
        status: "",
        harga_early: "",
        harga_reguler: "",
        tgl_early: "",
        wa_link: "",
      },
      imgSrc: "http://localhost:8000/storage/", // Update according to your setup
    };
  },
  methods: {
    async fetchAcara() {
      try {
        const response = await axios.get("http://localhost:8000/api/acaras");
        this.acaras = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    showCreateModal() {
      this.isEditing = false;
      this.form = {
        id: null,
        nama_acara: "",
        deskripsi: "",
        gambar: null,
        tgl_mulai: "",
        tgl_akhir: "",
        tgl_ditutup: "",
        lokasi: "",
        status: "",
        harga_early: "",
        harga_reguler: "",
        tgl_early: "",
        wa_link: "",
      };
      this.isModalOpen = true;
    },
    showEditModal(acara) {
      this.isEditing = true;
      this.form = { ...acara };
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    async createAcara() {
      const formData = new FormData();
      Object.keys(this.form).forEach((key) => {
        if (key === "gambar" && this.form[key]) {
          formData.append("gambar", this.form[key]);
        } else if (this.form[key] !== null && this.form[key] !== undefined) {
          formData.append(key, this.form[key]);
        }
      });

      try {
        await axios.post(postAcara, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        this.fetchAcara();
        this.closeModal();
      } catch (error) {
        console.error(error);
      }
    },

    async updateAcara() {
      const formData = new FormData();
      Object.keys(this.form).forEach((key) => {
        if (this.form[key] !== null && this.form[key] !== undefined) {
          formData.append(key, this.form[key]);
        }
      });

      try {
        await axios.post(
          `http://127.0.0.1:8000/api/acaras/${this.form.id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        this.fetchAcara();
        this.closeModal();
      } catch (error) {
        console.error(error.response.data.message);
        alert("Gambar harus berupa jpeg,png,jpg,gif,svg|max:2048");
      }
    },

    async deleteAcara(id) {
      try {
        await axios.delete(`http://localhost:8000/api/acaras/${id}`);
        this.fetchAcara();
      } catch (error) {
        console.error(error);
      }
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      this.form.gambar = file ? file : null;
    },

    // Materi
    async fetchMateri(acaraId) {
      this.selectedAcaraId = acaraId;
      try {
        const response = await axios.get(
          `http://localhost:8000/api/materi/${acaraId}`
        );
        this.materi = response.data;
        this.isMateriModalOpen = true;
      } catch (error) {
        console.error(error);
      }
    },

    async addMateri() {
      try {
        await axios.post(
          `http://localhost:8000/api/materi/${this.selectedAcaraId}`,
          { materi: this.newMateri }
        );
        this.fetchMateri(this.selectedAcaraId);
        this.newMateri = "";
      } catch (error) {
        console.error(error);
      }
    },

    async deleteMateri(materiId) {
      try {
        await axios.delete(`http://localhost:8000/api/materi/${materiId}`);
        this.fetchMateri(this.selectedAcaraId);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.fetchAcara();
  },
};
</script>

<style scoped>
.table-responsive-container {
  overflow-x: auto;
  padding: 10px;
}

.table {
  width: 100%;
  min-width: 1900px;
  border-collapse: collapse;
}

th,
td {
  text-align: left;
  padding: 8px 12px;
  border: 1px solid #ddd;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: #f9f9f9;
}

.table-hover tbody tr:hover {
  background-color: #f1f1f1;
}

.img-thumbnail {
  max-width: 80px;
  border-radius: 4px;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: auto;
  margin-bottom: 2px;
  margin-top: 100px;
}

.tableWidth {
  padding-left: 50px;
  padding-right: 50px;
}

.close {
  cursor: pointer;
  float: right;
  font-size: 24px;
}

th {
  white-space: nowrap;
}
</style>
