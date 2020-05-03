<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <section class="view-holer container mx-auto px-3">
      <router-view></router-view>
    </section>

    <footer>
      <section class="container mx-auto">footer text</section>
    </footer>
  </div>
</template>

<style lang="postcss">
@import 'assets/styles/tailwind.postcss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  @apply py-2 px-1 my-2 font-normal text-5xl;
}
h3 {
  @apply py-2 px-1 my-2 font-normal text-3xl;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
