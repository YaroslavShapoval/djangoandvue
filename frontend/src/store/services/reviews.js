import axios from 'axios'

const state = {
  reviews: [],
  emailFail: false,
  tokenFail: false
}

const getters = {}

const mutations = {
  setReviews (state, reviews) {
    state.reviews = reviews
  }
}

const actions = {
  async getReviewList (context) {
    return axios.get('/api/reviews')
      // .then(response => { context.commit('setReviews', response.data) })
      .then(response => { console.log(response.data) })
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
