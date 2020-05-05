
<template>
  <div class="film-deail">
    <p v-if="fetchApiDetailStatus">Loading ...</p>
    <Film-Detail
      v-else
      :overview="apiDetail.overview"
      :title="apiDetail.title"
      :release-date="apiDetail['release_date']"
      :poster-path="apiDetail['poster_path']"
      :vote-count="apiDetail['vote_count']"
      :vote-average="apiDetail['vote_average']"
      :popularity="apiDetail.popularity"
      :credits="apiDetail.credits"
    />
  </div>
</template>
<script>
import FilmDetail from '@/components/FilmDetail'
export default {
  name: 'Detail',
  props: {
    id: {
      type: String
    }
  },
  components: {
    FilmDetail
  },
  computed: {
    apiDetail() {
      return this.$store.state.apiDetail
    },
    fetchApiDetailStatus() {
      return this.$store.state.fetchApiDetailStatus
    }
  },
  created() {
    console.log('created detail view', this.$route.params)
    this.$store.dispatch('fetchDetail', { id: this.id })
  }
}
</script>