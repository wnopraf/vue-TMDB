<template>
  <div class="paginate flex justify-center">
    <ul class="flex">
      <li class="py-2 px-3" :disabled="page <= 1 ? true : false ">Previous</li>
      <li class="p-2">{{page}}</li>
      <li class="py-2 px-3" :disabled="page >= totalPages ? ture : false">Next</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Number
    },
    totalPages: {
      type: Number
    }
  },
  methods: {
    incrementPage() {
      this.$store.dispatch('fetchNowPlaying', this.page + 1)
    },
    decrementPage() {
      this.$store.dispatch('fetchNowPlaying'), this.page - 1
    }
  }
}
</script>