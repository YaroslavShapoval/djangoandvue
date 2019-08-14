<template>
  <div class="card">
    <div class="row no-gutters">
      <div class="col-sm-10">
        <div class="card-body">
          <h5 class="card-title">{{ review.title }}</h5>

          <p class="card-text">{{ review.review_text }}</p>

          <p class="card-text">
            <small class="text-muted">Posted by {{ review.author_name }}</small>
            <br>
            <small class="text-muted">Published at {{ review.pub_date | formatDate }}</small>
          </p>
        </div>
      </div>

      <div class="col-sm-2 text-right">
        <b-img slot="aside" fluid width="64" alt="placeholder" blank
              v-bind:blank-color="review.review_mark === 'positive' ? '#4fff90' : review.review_mark === 'negative' ? '#ff4f4f' : '#cccccc'"
        ></b-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewItem',

  props: {
    review: Object
  }
}
</script>

<style lang="css" scoped>
</style>
