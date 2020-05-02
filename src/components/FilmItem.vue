<template>
  <div class="film-item">
    <figure v-if="posterPath">
      <img :src="process.env.VUE_APP_IMG_URL_LOGO + posterPath" alt />
    </figure>
    <div class="film-item__info">
      <p>{{title}}</p>
      <router-link :to="`movie/${id}`">view film</router-link>
    </div>
    <p v-if="releaseDate">{{releaseDate}}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    posterPath: {
      type: String
    },
    id: {
      type: Number
    },
    releaseDate: {
      type: String
    }
  }
}
</script>