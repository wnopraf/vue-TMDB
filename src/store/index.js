import Vue from 'vue'
import Vuex from 'vuex'
import types from './constants'
import { axios } from '../utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    latestFilm: {},
    nowPlaying: [],
    apiDetail: {},
    fetchStatus: false
  },
  mutations: {
    [types.API_LATEST]: (store, { data }) => {
      store.latestFilm = data
      console.log('latest store', store.latestFilm)
    },
    [types.API_NOW_PLAYING]: (store, payload) => {
      store.nowPlaying = payload
    },
    [types.API_DETAIL]: (store, payload) => {
      store.apiDetail = payload
    },
    [types.FETCH_END]: (store, payload) => {
      store.fetchStatus = false
    },
    [types.FETCH_START]: (store, payload) => {
      store.fetchStatus = true
    }
  },
  actions: {
    fetchLatest: async ({ commit }) => {
      try {
        commit('FETCH_START')
        const latestFilm = await axios.get(
          `movie/latest?api_key=${process.env.VUE_APP_API_KEY}`
        )
        console.log(latestFilm, 'fetch latest')
        commit('FETCH_END')
        commit(types.API_LATEST, latestFilm)
      } catch (error) {
        // catch error depending of status code response error
        console.log(error)
      }
    }
  },
  modules: {}
})
