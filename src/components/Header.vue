<template>
  <header>
    <router-link to="/">
      <h1>
        <span>{{ title }}</span
        >{{ subtitle }}
      </h1>
    </router-link>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    title: String,
    subtitle: String
  }
})
export default class Header extends Vue {
  title!: string;
  subtitle!: string;
}
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: #2C3D4E;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  h1 {
    color: #FFF;
    font-size: 28px;
    span {
      color: #42B883;
    }
  }
}
</style>
