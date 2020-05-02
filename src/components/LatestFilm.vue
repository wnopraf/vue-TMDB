<template>
  <div class="latest-film">
    <h3>{{title}}</h3>
    <figure v-if="posterPath">
      <img :src="apiUrl + posterPath" alt />
    </figure>
    <p v-else>No poster avaliable</p>

    <p>{{overview}}</p>
    <video
      v-if="video"
      :src="process.env.VUE_APP_API_URL + `movie/${id}?api_key=${process.env.VUE_APP_API_KEY}&append_to_response=videos`"
    ></video>

    <p v-if="releaseDate">{{releaseDate}}</p>
    <router-link :to="`/movie/${id}`">view film</router-link>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    apiUrl: {
      default: process.env.VUE_APP_IMG_URL_LOGO
    },
    id: {
      type: Number
    },
    overview: {
      type: String
    },
    posterPath: {
      type: String
    },
    releaseDate: {
      type: String
    },
    video: {
      type: Boolean
    }
  }
}
</script>