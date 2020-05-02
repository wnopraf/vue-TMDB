<template>
  <div class="home">
    <p>{{JSON.stringify(latest)}}</p>
    <p>{{loading ? 'loading ...' : 'not loading'}}</p>
    <p>{{random}}</p>
    <p>{{latest['original_language']}}</p>
    <LatestFilm
      :overview="latest.overview"
      :title="latest.title"
      :poster-path="latest[poster_path]"
      :release-date="latest[release_date]"
      :video="latest[video]"
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
      latest: this.$store.state.latestFilm,
      loading: this.$store.state.fetchStatus,
      random: 'random prop'
    }
  },

  created: function() {
    console.log('created home')
    this.$store.dispatch('fetchLatest')
  }
}
</script>
