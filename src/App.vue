<template>
  <div id="app">
    <section class="text-center py-48 bg-blue-300 text-gray-700">
      <h1 class="uppercase text-6xl">tmdv app</h1>
      <small class="capitalize">the movie database</small>
    </section>
    <nav class="bg-blue-350 text-gray-700">
      <div class="nav-wrapper text-left font-bold">
        <router-link
          class="inline-block px-3 py-3 hover:bg-gray-700 hover:text-blue-300 transition-colors ease-in-out duration-500 border-r-2 border-gray-700"
          to="/"
        >Home</router-link>
      </div>
    </nav>
    <section class="view-holder container mx-auto px-3">
      <router-view></router-view>
    </section>

    <footer class="py-20 mt-12 bg-gray-700 text-blue-200">
      <section class="container mx-auto">
        <h3 class="font-bold uppercase">tvdm©</h3>
      </section>
    </footer>
  </div>
</template>

<style lang="postcss">
@import 'assets/styles/tailwind.postcss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  text-align: center;
  @apply text-gray-700;
}
h1 {
  @apply py-2 px-1  font-normal text-5xl;
}
h3 {
  @apply py-2 px-1  font-normal text-3xl;
}
.bg-blue-350 {
  background: rgb(139, 198, 236);
}
a {
  @apply font-bold;
}
</style>
