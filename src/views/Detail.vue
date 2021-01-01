<template>
  <div>
    <Loader :loading="loading" msg="Fetching feature details..." />

    <div class="feature-detail">
      <h2>{{ feature.Title }}</h2>
      <p>{{ feature.Year }}</p>
      <img :src="feature.Poster" alt="feature Poster" class="featured-img" />

      <div class="feature-numbers">
        <div class="modal-rating">
          <div>
            <h4>{{ feature.imdbRating }}</h4>
          </div>
          <p>Rating</p>
        </div>
        <div class="runtime">
          <div>
            <h4>{{ feature.Runtime }}</h4>
          </div>
          <p>Runtime</p>
        </div>
        <div class="votes">
          <div>
            <h4>{{ feature.imdbVotes }}</h4>
          </div>
          <p>Voters</p>
        </div>
      </div>

      <br />

      <p>{{ feature.Plot }}</p>
    </div>
  </div>
</template>

<script>
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";

import useFetch from "@/composables/useFetch";
import env from "@/env";

import Loader from "@/components/Loading.vue";

export default {
  components: {
    Loader
  },
  setup() {
    const route = useRoute();
    const { results: result, loading, hasErrors, execute } = useFetch();

    onBeforeMount(async () => {
      await execute(
        `${env.baseApi}/?apikey=${env.apiKey}&i=${route.params.id}&plot=full`
      );
    });

    console.log(result);
    return {
      feature: result,
      loading,
      hasErrors
    };
  }
};
</script>

<style lang="scss">
.feature-detail {
  padding: 16px;
  h2 {
    color: #fff;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;
  }
  .featured-img {
    display: block;
    max-width: 200px;
    margin-bottom: 16px;
  }
  p {
    color: #fff;
    font-size: 18px;
    line-height: 1.4;
  }
}

.feature-numbers {
  display: flex;
  div {
    flex: 1;
    text-align: center;
  }
  .modal-rating {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .runtime {
    display: flex;
    flex-direction: column;
  }
  .votes {
    display: flex;
    flex-direction: column;
  }
}
</style>
