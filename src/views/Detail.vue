<template>
  <div>
    <Loader :loading="state.loading" msg="Fetching feature details..." />
    {{ state.hasErrors }}
    <p v-if="state.hasErrors">
      Ops, fetch failed ;(
    </p>

    <div class="feature-detail">
      <h2>{{ state.features.Title }}</h2>
      <p>{{ state.features.Year }}</p>
      <img
        :src="state.features.Poster"
        alt="feature Poster"
        class="featured-img"
        width="100"
        height="100"
      />

      <div class="feature-numbers">
        <div class="modal-rating">
          <div>
            <h4>{{ state.features.imdbRating }}</h4>
          </div>
          <p>Rating</p>
        </div>
        <div class="runtime">
          <div>
            <h4>{{ state.features.Runtime }}</h4>
          </div>
          <p>Runtime</p>
        </div>
        <div class="votes">
          <div>
            <h4>{{ state.features.imdbVotes }}</h4>
          </div>
          <p>Voters</p>
        </div>
      </div>

      <br />

      <p>{{ state.features.Plot }}</p>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loading.vue";

import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";

import useMovieApi from "@/hooks/movieApi";

export default {
  components: {
    Loader
  },
  setup() {
    const route = useRoute();
    const state = useMovieApi();

    onBeforeMount(async () => {
      state.movieId = route.params.id;
    });

    return {
      state
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
