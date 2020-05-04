<template>
  <div class="paginate flex justify-center">
    <ul class="flex items-center">
      <li class="py-2 px-3 cursor-pointer">
        <button class="action" :disabled="page <= 1 ? true : false " @click="decrementPage">Previous</button>
      </li>
      <li>
        <button class="page-counter">{{page}}</button>
      </li>
      <li class="py-2 px-3 cursor-pointer">
        <button
          class="action"
          :disabled="page >= totalPages ? true : false"
          @click="incrementPage"
        >Next</button>
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
      this.$store.dispatch('fetchNowPlaying', { page: this.page - 1 })
    }
  }
}
</script>
<style lang="postcss" scoped>
.action {
  background-color: rgb(251, 200, 85);
  @apply px-4 py-1 rounded-sm text-gray-700 font-bold;
}
.page-counter {
  background-color: rgb(190, 213, 245);
  @apply py-1 px-2 mx-6 rounded-sm text-gray-800 font-bold;
}
.paginate {
  @apply mt-12;
}
</style>