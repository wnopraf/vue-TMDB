<template>
  <div class="film-detail">
    <div class="film-detail__film-info">
      <figure>
        <img :src="posterPath" alt />
      </figure>
      <h1>{{title}}</h1>
      <p>{{overview}}</p>
      <p>Release date: {{releaseDate}}</p>
    </div>
    <div class="cast">
      <ul>
        <li v-for="(actor, key) in credits.cast" :key="key">
          <figure>
            <img :src="actor.profilePath" alt />
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
      <p>Vote count: {{voteCount}}</p>
      <p>Vote average: {{voteAverage}}</p>
    </div>
  </div>
</template>