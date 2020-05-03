<template>
  <div class="film-detail-view">
    <Film-Detail />
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