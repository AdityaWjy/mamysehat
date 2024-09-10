<template>
  <div class="layout-container">
    <!-- sidebar acara -->
    <Sidebar />

    <div class="table-container">
      <TableAcara />
    </div>
  </div>
</template>

<script>
import TableAcara from "../../components/admin/acara/tableAcara.vue";
import Sidebar from "../../components/admin/Sidebar.vue";

export default {
  components: {
    Sidebar,
    TableAcara,
  },
};
</script>

<style scoped>
.layout-container {
  display: flex;
}

.sidebar {
  width: 250px; /* Lebar sidebar */
}

.table-container {
  flex-grow: 1; /* Tabel akan menempati sisa ruang */
  padding: 20px; /* Jarak antar elemen */
  margin-top: 50px;
  max-width: 80%; /* Membatasi lebar maksimal tabel agar tidak menempel ke kanan */
  margin-right: auto; /* Menghindari tabel menempel ke ujung kanan */
}
</style>
