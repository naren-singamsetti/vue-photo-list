import { PostsService } from '../services/posts.service'

const state = {
    posts: {
        loading: false,
        items: [],
        error: {}
    }
}

const actions = {
    getAllPosts({ commit }) {
        commit('getAllPostsRequest')
        PostsService.getAllPosts()
            .then(
                posts => commit('getAllPostsSuccess', posts),
                error => commit('getAllPostsFailure', error)
            )
    }
}

const mutations = {
    getAllPostsRequest(state) {
        state.posts.loading = true
    },
    getAllPostsSuccess(state, posts) {
        state.posts.loading = false
        state.posts.items = posts
    },
    getAllPostsFailure(state, error) {
        state.posts.loading = false
        state.posts.error = error
    }
}

export const posts = {
    namespaced: true,
    state,
    actions,
    mutations
};