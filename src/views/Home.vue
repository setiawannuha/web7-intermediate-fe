<template>
  <div class="home">
    <h1>Home Page</h1>
    <p>{{getToken}}</p>
    <h2>{{stateAngka}}</h2>
    <div>
      <button class="btn btn-secondary m-2" @click="aliasActionTambah()">Tambah</button>
      <button class="btn btn-secondary m-2" @click="aliasActionKurang()">Kurang</button>
    </div>
    <hr>
    <h2>{{stateNama}}</h2>
    <h2>{{gettersNama}}</h2>
    <button class="btn btn-primary" @click="sendParamsToAction()">Set Nama</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState({
      stateAngka: (state) => state.angka,
      stateNama: (state) => state.nama
    }),
    ...mapGetters({
      gettersNama: 'getNama',
      getToken: 'auth/getToken'
    })
  },
  methods: {
    ...mapActions({
      aliasActionTambah: 'actionTambah',
      aliasActionKurang: 'actionKurang',
      aliasActionSetNama: 'actionSetNama'
    }),
    sendParamsToAction () {
      this.aliasActionSetNama('Restu Aji')
    }
  }
}
</script>
