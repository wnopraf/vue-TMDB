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
    fetchLatestStatus: false,
    fetchNowPlayingStatus: false,
    fetchApiDetailStatus: false
  },
  mutations: {
    [types.API_LATEST](store, { data }) {
      store.latestFilm = data
      console.log('latest store', store.latestFilm)
    },
    [types.API_NOW_PLAYING](store, payload) {
      store.nowPlaying = payload
    },
    [types.API_DETAIL](store, payload) {
      store.apiDetail = payload
    },
    [types.FETCH_LATEST_END](store) {
      store.fetchLatestStatus = false
    },
    [types.FETCH_LATEST_START](store) {
      store.fetchLatestStatus = true
    },
    [types.FETCH_NOW_PLAYING_START](store) {
      store.fetchNowPlayingStatus = true
    },
    [types.FETCH_NOW_PLAYING_END](store) {
      store.fetchNowPlayingStatus = false
    },
    [types.FETCH_API_DETAIL_START](store) {
      store.fetchApiDetailStatus = true
    },
    [types.FETCH_API_DETAIL_END](store) {
      store.fetchApiDetailStatus = false
    }
  },
  actions: {
    async fetchLatest({ commit }) {
      commit(types.FETCH_LATEST_START)
      const latestFilm = await axios.get(
        `movie/latest?api_key=${process.env.VUE_APP_API_KEY}`
      )
      console.log(latestFilm, 'fetch latest')
      commit(types.FETCH_LATEST_END)
      commit(types.API_LATEST, latestFilm)
    },
    async fetchNowPlaying({ commit }, { page } = { page: 1 }) {
      commit(types.FETCH_NOW_PLAYING_START)
      const { data: nowPlaying } = await axios.get(
        `movie/now_playing?api_key=${process.env.VUE_APP_API_KEY}&page=${page}`
      )
      console.log(nowPlaying, 'nowplaying')
      commit(types.FETCH_NOW_PLAYING_END)
      commit(types.API_NOW_PLAYING, nowPlaying)
    },
    async fetchDetail({ commit }, { id }) {
      commit(types.FETCH_API_DETAIL_START)
      const { data: detailPageData } = await axios.get(
        `movie/${id}?api_key=${process.env.VUE_APP_API_KEY}&append_to_response=credits`
      )
      console.log('apidetail data', detailPageData)
      commit(types.FETCH_API_DETAIL_END)
      commit(types.API_DETAIL, detailPageData)
    }
  },
  modules: {}
})
