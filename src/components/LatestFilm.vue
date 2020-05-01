<template>
  <div class="latest-film">
    <h3>{{title}}</h3>
    <figure v-if="poster_path">
      <img :src="poster_path" alt />
    </figure>
    <p v-else>No poster avaliable</p>

    <p>{{overview}}</p>
    <video v-if="video" :src="video"></video>
    <p v-if="release-date">{{release_date}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: 'string',
    overview: 'string',
    poster_path: 'string',
    release_date: 'string',
    video: 'string'
  }
}
</script>