<template>
  <Header title="Vue" subtitle="Movies" />
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Header from "@/components/Header.vue";

@Options({
  components: {
    Header
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
  &::selection {
    background: transparentize(#42B883, 0.5);
  }
}
body {
  background-color: #35495E;
}
</style>
