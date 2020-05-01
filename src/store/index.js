import Vue from 'vue'
import Vuex from 'vuex'
import types from './constants'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    latestFilm: {},
    nowPlaying: [],
    apiDetail: {},
  },
  mutations: {
    [types.API_LATEST]: ({ latestFilm }, payload) => {
      latestFilm = payload
    },
    [types.API_NOW_PLAYING]: ({ nowPlaying }, payload) => {
      nowPlaying = payload
    },
    [types.API_DETAIL]: ({ apiDetail }, payload) => {
      apiDetail = payload
    },
  },
  actions: {},
  modules: {},
})
