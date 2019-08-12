<template>
  <div class="container">
    <h1>Cookiecutter Django Vue, {{ this.$store.state.loggedIn ? 'Y' : 'N' }}</h1>
    <p align="center">
      <img src="/img/logo.png">
    </p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ReviewsComponent',
  created () {
    this.getReviewList()
  },
  methods: {
    ...mapActions({
      getReviewList: 'reviews/getReviewList'
    })
  }
}
</script>

<style lang="css" scoped>
  h1 {
    text-align: center;
  }
</style>
