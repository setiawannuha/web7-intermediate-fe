<template>
  <div>
    <h1>Detail {{paramId}}</h1>
    {{getDetailUser}}
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      paramId: this.$route.params.id // <- get parameter id
    }
  },
  computed: {
    ...mapGetters({
      getDetailUser: 'moduleUsers/getDetailUser' // <- get getter from vuex
    })
  },
  methods: {
    ...mapActions({
      actionGetDetailUser: 'moduleUsers/actionGetDetailUser' // <- get action from vuex
    })
  },
  mounted () {
    this.actionGetDetailUser(this.paramId) // <- call action vuex
  }
}
</script>
