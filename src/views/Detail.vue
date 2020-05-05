
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
import { mapState, mapActions } from 'vuex'
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
    ...mapState(['apiDetail', 'fetchApiDetailStatus'])
  },
  created() {
    console.log('created detail view', this.$route.params)
    this.fetchDetail({ id: this.id })
  },
  methods: {
    ...mapActions(['fetchDetail'])
  }
}
</script>