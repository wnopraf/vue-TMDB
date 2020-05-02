<template>
  <div class="home">
    <p>{{JSON.stringify(filmProps)}}</p>
    <p>{{loading ? 'loading ...' : 'not loading'}}</p>

    <LatestFilm
      :overview="filmProps.overview"
      :title="filmProps.title"
      :id="filmProps.id"
      :poster-path="filmProps['poster_path']"
      :release-date="filmProps['release_date']"
      :video="filmProps.video"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import LatestFilm from '@/components/LatestFilm'
export default {
  name: 'Home',
  components: {
    LatestFilm
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
    loading() {
      return this.$store.state.fetchStatus
    }
  },

  created: function() {
    console.log('created home')
    this.$store.dispatch('fetchLatest')
  }
}
</script>
