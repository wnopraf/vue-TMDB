<template>
  <div class="home">
    <p v-if="loadingLatestFilms">Loading ...</p>

    <LatestFilm
      v-else
      :overview="filmProps.overview"
      :title="filmProps.title"
      :id="filmProps.id"
      :poster-path="filmProps['poster_path']"
      :release-date="filmProps['release_date']"
      :video="filmProps.video"
    />
    <div class="now-playing">
      <p v-if="loadingNowPlaying">Loading now playign films ...</p>
      <ul v-else>
        <li v-for="(nowPlayed, key) in nowPlaying.results" :key="key">
          <FilmItem
            :title="nowPlayed.title"
            :poster-path="nowPlayed['poster_path']"
            :release-date="nowPlayed['release_date'] "
            :id="nowPlayed.id"
          />
        </li>
      </ul>
    </div>
    <Paginate-Film :page="nowPlaying.page" :total-pages="nowPlaying['total_pages']" />
  </div>
</template>

<script>
// @ is an alias to /src
import LatestFilm from '@/components/LatestFilm'
import FilmItem from '@/components/FilmItem'
import PaginateFilm from '@/components/PaginateFilm'
export default {
  name: 'Home',
  components: {
    LatestFilm,
    FilmItem,
    PaginateFilm
  },
  data() {
    return {
      random: 'random prop'
    }
  },
  computed: {
    filmProps() {
      return this.$store.state.latestFilm
    },
    loadingLatestFilms() {
      return this.$store.state.fetchLatestStatus
    },
    loadingNowPlaying() {
      return this.$store.state.loadingNowPlaying
    },
    nowPlaying() {
      return this.$store.state.nowPlaying
    }
  },

  created: async function() {
    console.log('created home')
    await this.$store.dispatch('fetchLatest')
    await this.$store.dispatch('fetchNowPlaying')
  }
}
</script>
