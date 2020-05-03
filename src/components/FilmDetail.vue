<template>
  <div class="film-detail">
    <div class="film-detail__film-info">
      <figure>
        <img :src="globalImagePosterPath + posterPath" alt />
      </figure>
      <h1>{{title}}</h1>
      <p>{{overview}}</p>
      <p>Release date: {{releaseDate}}</p>
    </div>
    <div class="cast">
      <ul>
        <li v-for="(actor, key) in credits.cast" :key="key">
          <figure>
            <img :src="globalImgLogoPath + actor.profilePath" alt />
          </figure>
          <div class="cast__info">
            <span>Actor Name</span>
            <span>{{actor.name}}</span>
            <span>Character name</span>
            <span>{{actor.character}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="film-detail__ratings">
      <div class="film-detail__ratings__vote-rate">
        <p>Vote count: {{voteCount}}</p>
        <p>Vote average: {{voteAverage}}</p>
      </div>
      <p class="film-detail__ratigns__popularity">
        <span>Popularity:</span>
        <span>{{popularity}}</span>
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
    releasDate: {
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
    voteCout: {
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