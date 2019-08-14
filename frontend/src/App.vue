<template lang="html">
  <div class="container">
    <custom-nav-bar></custom-nav-bar>
    <router-view/>
  </div>
</template>

<script>
import CustomNavBar from './components/CustomNavBar.vue'

export default {
  name: 'App',
  components: {
  	CustomNavBar
  },
}
</script>
