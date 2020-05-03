<template>
  <div class="film-detail-view">
    <Film-Detail
      :overview="apiDetail.overview"
      :title="apiDetail.title"
      :release-date="apiDetail['release_date']"
      :poster-path="apiDetail['poster_path']"
      :vote-count="apiDetail['vote_count']"
      :vote-average="apiDetail['vote_average']"
      :popularity="popularity"
      :credits="apiDetail.credits"
    />
  </div>
</template>
<script>
import FilmDetail from '@/components/FilmDetail'
export default {
  props: {
    id: {
      type: Number
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
    this.$store.dispatch('fetchDetail', id)
  }
}
</script>