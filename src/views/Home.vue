<template>
  <div class="home">
    <form @submit.prevent="Search()" class="search-box">
      <input
        type="text"
        placeholder="What are you looking for?"
        v-model="search"
      />
      <input type="submit" value="Search" />
    </form>

    <Loader :loading="loading" msg="Searching data..." />

    <p v-if="hasErrors">
      Ops, fetch failed ;(
    </p>

    <div class="features-list">
      <div
        class="feature"
        v-for="feature in features.Search"
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
import { ref } from "vue";

import Loader from "@/components/Loading.vue";
import FeatureCard from "@/components/FeatureCard.vue";

import useFetch from "@/composables/useFetch";
import env from "@/env";

type Search = [
  {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
  }
];
export default {
  components: {
    Loader,
    FeatureCard
  },
  setup() {
    const search = ref("");

    const { results, loading, hasErrors, execute } = useFetch();

    const Search = async () => {
      await execute(
        `${env.baseApi}/?apikey=${env.apiKey}&s=${search.value}&plot=short`
      );
    };

    return {
      search,
      features: results,
      loading,
      hasErrors,
      Search
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
  .search-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    input {
      display: block;
      appearance: none;
      border: none;
      outline: none;
      background: none;
      &[type="text"] {
        width: 100%;
        color: #fff;
        background-color: #496583;
        font-size: 20px;
        padding: 10px 16px;
        border-radius: 8px;
        margin-bottom: 15px;
        transition: 0.4s;
        &::placeholder {
          color: #f3f3f3;
        }
        &:focus {
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        }
      }
      &[type="submit"] {
        width: 100%;
        max-width: 300px;
        background-color: #42b883;
        padding: 16px;
        border-radius: 8px;
        color: #fff;
        font-size: 20px;
        text-transform: uppercase;
        transition: 0.4s;
        &:active {
          background-color: #3b8070;
        }
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
