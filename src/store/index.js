import Vue from 'vue'
import Vuex from 'vuex'

import { user } from './user.module'
import { posts } from './posts.module'
import { photos } from './photos.module'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    posts,
    photos
  }
})
