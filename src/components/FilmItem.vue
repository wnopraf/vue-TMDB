<template>
  <div class="film-item">
    <figure v-if="posterPath">
      <img :src=" globalImgLogoPath + posterPath" alt />
    </figure>
    <div class="film-item__info">
      <p>{{title}}</p>
      <router-link :to="`movie/${id}`" class="px-3 py-2 rounded-sm bg-blue-300">view film</router-link>
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
    globalImgLogoPath: {
      type: String,
      default: process.env.VUE_APP_IMG_URL_LOGO
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
