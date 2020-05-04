<template>
  <div class="film-detail mt-20">
    <div class="film-detail__film-info">
      <figure class="flex justify-center">
        <img :src="globalImagePosterPath + posterPath" alt />
      </figure>
      <h1>{{title}}</h1>
      <p>{{overview}}</p>
      <p>Release date: {{releaseDate}}</p>
    </div>
    <div class="cast mt-16">
      <ul>
        <li
          v-for="(actor, key) in credits.cast"
          :key="key"
          class="flex flex-col sm:flex-row items-center justify-center py-4"
        >
          <figure>
            <img v-if="actor['profile_path']" :src="globalImgLogoPath + actor['profile_path']" alt />
            <div v-else class="img-replace flex justify-center items-center">
              <p>profile avatar not avaliable</p>
            </div>
          </figure>
          <div class="cast__info sm:flex flex-wrap mt-3 sm:mt-0 ml-12 sm:w-1/2">
            <span class="sm:w-1/2 block">Actor Name</span>
            <span class="sm:w-1/2 block">{{actor.name}}</span>
            <span class="sm:w-1/2 block">Character name</span>
            <span class="sm:w-1/2 block">{{actor.character}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="film-detail__ratings mt-4">
      <div class="film-detail__ratings__vote-rate sm:flex sm:justify-around">
        <p class="votes mb-3 sm:mb-0">Vote count: {{voteCount}}</p>
        <p class="votes">Vote average: {{voteAverage}}</p>
      </div>
      <p class="film-detail__ratigns__popularity mt-6 flex justify-center">
        <span class="votes">Popularity: {{popularity}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    releaseDate: {
      type: String
    },
    overview: {
      type: String
    },
    posterPath: {
      type: String
    },
    globalImagePosterPath: {
      type: String,
      default: process.env.VUE_APP_IMG_URL_POSTER
    },
    globalImgLogoPath: {
      type: String,
      default: process.env.VUE_APP_IMG_URL_LOGO
    },
    credits: {
      type: Object
    },
    voteCount: {
      type: Number
    },
    voteAverage: {
      type: Number
    },
    popularity: {
      type: Number
    }
  }
}
</script>

<style lang="postcss" scoped>
.img-replace {
  max-width: 100%;
  height: 231px;
}
.votes {
  @apply px-3 py-2 bg-yellow-500 text-gray-700 font-bold rounded-sm;
}
</style>