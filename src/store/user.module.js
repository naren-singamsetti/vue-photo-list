import router from '../router'

const state = {
    user: {
        token: '',
        user: {},
        error: {},
        loading: false,
        loggedIn: false
    }
}

const actions = {
    login({ commit }, user) {
        commit('loginRequest')
        if ((user.email === 'appuser@gmail.com' || user.email === 'appusertwo@gmail.com')
            && user.password === 'test123') {
            const token = user.email
            localStorage.setItem('token', token)
            commit('loginSuccess', token, user)
            router.push('/');
        } else {
            localStorage.removeItem('token')
            commit('loginFailure', new Error({ msg: 'Credentials invalid' }))
        }
    },
    logout({ commit }) {
        commit('logout')
        localStorage.removeItem('token')
        router.push('/login')
    }
}

const mutations = {
    loginRequest(state) {
        state.user.loading = true
    },
    loginSuccess(state, token, user) {
        state.user = {
            token,
            user,
            loading: false,
            loggedIn: true
        }
    },
    loginFailure(state, error) {
        state.user = {
            loading: false,
            loggedIn: false,
            error
        }
    },
    logout(state) {
        state.user = {
            token: '',
            user: {},
            error: {},
            loading: false,
            loggedIn: false
        }
    }
}

const getters = {
    isLoggedIn: state => !!state.user.token || !!localStorage.getItem('token')
}

export const user = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}