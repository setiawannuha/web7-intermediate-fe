<template>
  <div>
    <div class="container p-5 m-5">
      <div class="card">
        <div class="card-body">
          <form action="" v-on:submit.prevent="onSubmitLogin()">
            <input v-model="email" type="text" class="form-control mb-2" placeholder="Email">
            <input v-model="password" type="password" class="form-control mb-2" placeholder="Password">
            <button type="submit" class="btn btn-secondary">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions({
      actionLogin: 'auth/login'
    }),
    onSubmitLogin () {
      const data = {
        email: this.email,
        password: this.password
      }
      this.actionLogin(data).then((response) => {
        console.log(response)
        this.$router.push('/')
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
