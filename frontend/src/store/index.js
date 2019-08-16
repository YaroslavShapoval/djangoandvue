import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/store/modules/auth'
import reviews from '@/store/services/reviews'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth: auth,
    reviews: reviews
  }
})

export default store
