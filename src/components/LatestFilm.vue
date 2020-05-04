<template>
  <div class="latest-film mt-12 mb-24">
    <h3>{{title}}</h3>
    <figure v-if="posterPath" class="flex justify-center my-2">
      <img :src="globalImagePosterPath + posterPath" alt />
    </figure>
    <p v-else class="text-center text-xl bold my-2">No poster avaliable</p>

    <p>{{overview}}</p>
    <figure class="flex justify-center">
      <video
        v-if="video"
        :src=" apiUrl + `movie/${id}?api_key=${apiKey}&append_to_response=videos`"
      ></video>
    </figure>

    <p v-if="releaseDate">{{releaseDate}}</p>
    <router-link
      :to="`/movie/${id}`"
      class="inline-block py-2 px-4 bg-yellow-500 rounded-sm mt-3"
    >view film</router-link>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    globalImagePosterPath: {
      type: String,
      default: process.env.VUE_APP_IMG_URL_POSTER
    },
    apiUrl: {
      type: String,
      default: process.env.VUE_APP_API_URL
    },
    apiKey: {
      type: String,
      default: process.env.VUE_APP_API_URL
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
