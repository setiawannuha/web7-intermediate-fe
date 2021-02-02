<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{stateAngka}}</h2>
    <hr>
    <h2>Data List Users from Vuex</h2>
    <div v-for="(item, index) in gettersGetListUsers" :key="index">
      {{item.name}} <button @click="detail(item.id)" class="btn btn-link">Detail</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import router from '../router/index'
export default {
  computed: {
    ...mapState({
      stateAngka: state => state.angka
    }),
    ...mapGetters({
      gettersGetListUsers: 'moduleUsers/getListUsers'
    })
  },
  methods: {
    ...mapActions({
      actionGetUsersFromAPI: 'moduleUsers/actionGetUsersFromAPI'
    }),
    detail (id) {
      // this.$router.push(`/detail/${id}`) // cara 1
      router.push(`/detail/${id}`) // cara 2
    }
  },
  mounted () {
    this.actionGetUsersFromAPI()
  }
}
</script>
