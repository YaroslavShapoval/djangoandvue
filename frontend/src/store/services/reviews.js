import axios from 'axios'

const ITEMS_PER_PAGE = 4

const state = {
  pagination: {
    limit: ITEMS_PER_PAGE,
    offset: 0,
    ordering: null,
    searchString: '',
    items_count: 0,
    current_page: 1,
    total_pages: 0
  },
  reviews: []
}

const getters = {}

const mutations = {
  setOffset (state, offset) {
    state.offset = offset
  },

  setSearchString (state, searchString) {
    state.searchString = searchString
  },

  setReviews (state, result) {
    state.reviews = result.results
    state.pagination.items_count = result.count
    state.pagination.total_pages = Math.ceil(result.count / ITEMS_PER_PAGE)
  }
}

const actions = {
  async getReviewList ({ commit }, payload) {
    const offset = payload.page && parseInt(payload.page) > 0 ? (parseInt(payload.page) - 1) * ITEMS_PER_PAGE : this.state.reviews.pagination.offset
    const searchString = payload.searchString ? payload.searchString : this.state.reviews.pagination.searchString

    let url = '/api/reviews'
    url += '?limit=' + ITEMS_PER_PAGE
    url += '&offset=' + offset

    if (this.state.reviews.pagination.ordering) {
      url += '&ordering=' + this.state.reviews.pagination.ordering
    }

    if (searchString) {
      url += '&search=' + searchString
    }

    return axios.get(url)
      .then(response => {
        commit('setOffset', offset)
        commit('setSearchString', searchString)
        commit('setReviews', response.data)
      })
      .catch(e => { console.log(e) })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
