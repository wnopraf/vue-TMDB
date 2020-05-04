<template>
  <div class="film-item mt-3">
    <figure v-if="posterPath" class="flex justify-center">
      <img :src=" globalImgLogoPath + posterPath" alt />
    </figure>
    <div class="film-item__info">
      <h3>{{title}}</h3>
      <router-link
        :to="`movie/${id}`"
        class="inline-block px-3 py-2 rounded-sm bg-yellow-500"
      >view film</router-link>
    </div>
    <p v-if="releaseDate" class="mt-2">{{releaseDate}}</p>
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
