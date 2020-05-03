<template>
  <div class="about">
    <h1>This is an about page</h1>
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
    film() {
      return this.$store.state.FilmDetail
    }
  },
  created() {
    this.$store.dispatch('fetchDetail', id)
  }
}
</script>