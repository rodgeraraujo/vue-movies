<template>
  <div class="product-image">
    <img :src="feature.Poster" alt="Feature Poster" />
    <div class="type">{{ feature.Type }}</div>
  </div>
  <div class="detail">
    <p class="year">{{ feature.Year }}</p>
    <h3>{{ feature.Title }}</h3>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

type Feature = {
  Type: string;
  Year: string;
  Title: string;
};

@Options({
  props: {
    feature: Object
  }
})
export default class FeatureCard extends Vue {
  feature!: Feature;
}
</script>

<style scoped lang="scss">
.product-image {
  position: relative;
  display: block;
  img {
    display: block;
    width: 100%;
    height: 275px;
    object-fit: cover;
  }
  .type {
    position: absolute;
    padding: 8px 16px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #28624e;
    color: #fff;
    bottom: 16px;
    left: 0px;
    text-transform: capitalize;
  }
}
.detail {
  background-color: #314a5e;
  padding: 16px 8px;
  flex: 1 1 100%;
  border-radius: 0px 0px 8px 8px;
  .year {
    color: #e3e3e3;
    font-size: 14px;
  }
  h3 {
    color: #fff;
    font-weight: 600;
    font-size: 18px;
  }
}
</style>
