<template>
  <div class="container">
    <h1>Cookiecutter Django Vue, {{ this.$store.state.loggedIn ? 'Y' : 'N' }}</h1>
    <p align="center">
      <img src="/img/logo.png">
    </p>
  </div>
</template>

<script>
export default {
  name: 'MainComponent'
}
</script>

<style lang="css" scoped>
  h1 {
    text-align: center;
  }
</style>
