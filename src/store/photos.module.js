import { PhotosService } from '../services/photos.service'

const state = {
    photos: {
        loading: false,
        items: [],
        error: {}
    }
}

const actions = {
    getAllPhotos({ commit }) {
        commit('getAllPhotosRequest')
        PhotosService.getAllPhotos()
            .then(
                photos => commit('getAllPhotosSuccess', photos),
                error => commit('getAllPhotosFailure', error)
            )
    }
}

const mutations = {
    getAllPhotosRequest(state) {
        state.photos.loading = true
    },
    getAllPhotosSuccess(state, photos) {
        state.photos.loading = false
        state.photos.items = photos
    },
    getAllPhotosFailure(state, error) {
        state.photos.loading = false
        state.photos.error = error
    }
}

export const photos = {
    namespaced: true,
    state,
    actions,
    mutations
};