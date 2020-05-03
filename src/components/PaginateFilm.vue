<template>
  <div class="paginate flex justify-center">
    <ul class="flex">
      <li class="py-2 px-3 cursor-pointer">
        <button :disabled="page <= 1 ? true : false " @click="decrementPage">Previous</button>
      </li>
      <li class="p-2">{{page}}</li>
      <li class="py-2 px-3 cursor-pointer">
        <button :disabled="page >= totalPages ? true : false" @click="incrementPage">Next</button>
      </li>
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
      this.$store.dispatch('fetchNowPlaying', { page: this.page + 1 })
    },
    decrementPage() {
      console.log('decrement', this.page)
      this.$store.dispatch('fetchNowPlaying', { page: this.page - 1 })
    }
  }
}
</script>