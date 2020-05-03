import Vue from 'vue'
import Vuex from 'vuex'
import types from './constants'
import { axios, handleResError } from '../utils'

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
    [types.FETCH_LATEST_END]: store => {
      store.fetchLatestStatus = false
    },
    [types.FETCH_LATEST_START]: store => {
      store.fetchLatestStatus = true
    },
    [types.FETCH_NOW_PLAYING_START]: store => {
      store.fetchNowPlayingStatus = true
    },
    [types.FETCH_NOW_PLAYING_END]: store => {
      store.fetchNowPlayingStatus = false
    },
    [types.FETCH_API_DETAIL_START]: store => {
      store.fetchApiDetailStatus = true
    },
    [types.FETCH_API_DETAIL_START]: store => {
      store.fetchApiDetailStatus = false
    },
    [types.ERROR_401]: store => {
      this.$router.push('401')
    },
    [types.ERROR_500]: store => {
      this.$router.push('500')
    }
  },
  actions: {
    fetchLatest: async ({ commit }) => {
      try {
        commit(types.FETCH_LATEST_START)
        const latestFilm = await axios.get(
          `movie/latest?api_key=${process.env.VUE_APP_API_KEY}`
        )
        console.log(latestFilm, 'fetch latest')
        commit(types.FETCH_LATEST_END)
        commit(types.API_LATEST, latestFilm)
      } catch (error) {
        // catch error depending of status code response error
        console.log('fetch_latest_error', error)
        handleResError(error.response.status, commit)
      }
    },
    fetchNowPlaying: async ({ commit }, { page } = { page: 1 }) => {
      try {
        commit(types.FETCH_NOW_PLAYING_START)
        const { data: nowPlaying } = await axios.get(
          `movie/now_playing?api_key=${process.env.VUE_APP_API_KEY}&page=${page}`
        )
        console.log(nowPlaying, 'nowplaying')
        commit(types.FETCH_NOW_PLAYING_END)
        commit(types.API_NOW_PLAYING, nowPlaying)
      } catch (error) {
        // catch error depending of status code response error
        console.log(error, 'fetch_now_playing_error')
        handleResError(error.response.status, commit)
      }
    },
    fetchDetail: async ({ commit }, { id }) => {
      try {
        commit(types.FETCH_API_DETAIL_START)
        const { data: detailPageData } = await axios.get(
          `movie/${id}/${process.env.VUE_APP_API_KEY}&append_to_response=credits`
        )
        commit(types.FETCH_API_DETAIL_END)
        commit(types.API_DETAIL, detailPageData)
      } catch (error) {
        console.log('fetchDetail', error)
        handleResError(error.response.status, commit)
      }
    }
  },
  modules: {}
})
