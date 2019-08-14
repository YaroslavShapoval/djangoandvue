<template>
    <div>
      <div class="row" v-if="$store.state.reviews">
        <div class="col-md-6 review-item" v-for="review in $store.state.reviews.reviews" v-bind:key="review.id">
          <review-item :review=review></review-item>
        </div>
      </div>

      <div class="overflow-auto">
        <b-pagination-nav
          align="center"
          :link-gen="linkGen"
          :number-of-pages="$store.state.reviews.pagination.total_pages ? $store.state.reviews.pagination.total_pages : 1"
          :use-router=true></b-pagination-nav>
      </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ReviewItem from './ReviewItem.vue'

export default {
  name: 'ReviewsComponent',

  components: {
  	ReviewItem
  },

  props: {
    searchString: String,
    page: Number
  },

  created () {
    this.getReviewList({
      searchString: this.searchString,
      page: this.page,
    })
  },

  beforeRouteUpdate (to, from, next) {
    const { q, page } = to.query

    this.getReviewList({
      searchString: q,
      page: page
    })

    next()
  },

  methods: {
    ...mapActions({
      getReviewList: 'reviews/getReviewList',
    }),

    linkGen(pageNum) {
      return {
        path: '/reviews/',
        query: { page: pageNum }
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .review-item {
    margin-bottom: 1.5em;
  }
</style>
