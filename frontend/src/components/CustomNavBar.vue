<template>
  <div class="navbar-wrapper">
    <b-navbar toggleable="lg" type="light" variant="light">
      <div class="container">
        <b-navbar-brand to="/">Django And Vue</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/reviews">Reviews</b-nav-item>
            <b-nav-item to="/reviews/stats">Stats</b-nav-item>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content"><em>User</em></template>
              <b-dropdown-item to="/logout">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'CustomNavBar'
}
</script>

<style lang="css" scoped>
  .navbar-wrapper {
    margin-bottom: 1em;
  }
</style>
