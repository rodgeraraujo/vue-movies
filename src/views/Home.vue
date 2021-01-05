<template>
  <div class="home">
    <Search
      :search="state.search"
      placeholder="What are you looking for?"
      @search="handleSearch"
    />

    <Loader :loading="state.loading" msg="Searching data..." />

    <p v-if="state.hasErrors">
      Ops, fetch failed ;(
    </p>

    <div class="features-list">
      <div
        class="feature"
        v-for="feature in state.features.Search"
        :key="feature.imdbID"
      >
        <router-link
          :to="`/${feature.Type}/${feature.imdbID}`"
          class="feature-link"
        >
          <FeatureCard :feature="feature" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Loader from "@/components/Loading.vue";
import FeatureCard from "@/components/FeatureCard.vue";
import Search from "@/components/Search.vue";

import useMovieApi from "@/hooks/movieApi";
import { onBeforeMount } from "vue";

export default {
  name: "Home",
  components: {
    Loader,
    FeatureCard,
    Search
  },
  setup() {
    const state = useMovieApi();

    const handleSearch = (searchTerm: string) => {
      state.search = searchTerm;
    };

    onBeforeMount(() => {
      state.search = "Batman";
    });

    return {
      state,
      handleSearch
    };
  }
};
</script>

<style lang="scss">
.home {
  .feature-card {
    position: relative;
    .featured-img {
      display: block;
      width: 100%;
      height: 300px;
      object-fit: cover;
      position: relative;
      z-index: 0;
    }
    .detail {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 16px;
      z-index: 1;
      h3 {
        color: #fff;
        margin-bottom: 16px;
      }
      p {
        color: #fff;
      }
    }
  }
  .features-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0px 8px;
    .feature {
      max-width: 50%;
      flex: 1 1 50%;
      padding: 16px 8px;
    }
  }
}
</style>
