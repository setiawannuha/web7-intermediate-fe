<template>
  <div class="container">
    <h1>Crud Buku</h1>
    <div class="form-inline mt-3 mb-5" style="display:flex;justify-content:center;">
      <form action="" @submit.prevent="search()">
        <input v-model="inputSearch" type="text" class="form-control" placeholder="Search">
        <button class="btn btn-success">Search</button>
      </form>
    </div>
    <div v-if="booksIsError">
      <h2>{{booksErrorMessage}}</h2>
    </div>
    <div v-else v-for="(item, index) in listBooks" :key="index">
      {{item.name}} - Rp. {{item.price}}
    </div>
    <div class="mt-5">
      <button class="btn btn-danger" @click="onLogout()">Logout</button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      inputSearch: ''
    }
  },
  computed: {
    ...mapGetters({
      listBooks: 'books/resultList',
      booksIsError: 'books/isError',
      booksErrorMessage: 'books/errMessage'
    })
  },
  methods: {
    ...mapActions({
      getListBooks: 'books/getList',
      actionLogout: 'auth/logout'
    }),
    search () {
      this.getListBooks(this.inputSearch)
    },
    onLogout () {
      this.actionLogout().then((response) => {
        if (response) {
          this.$router.push('/login')
        } else {
          alert('gagal logout check code anda')
        }
      })
    }
  },
  mounted () {
    this.getListBooks(this.inputSearch)
  }
}
</script>
