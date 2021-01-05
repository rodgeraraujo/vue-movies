import { reactive, watch } from "vue";

import useFetch from "@/composables/useFetch";
import env from "@/env";

function callback() {
  console.log("watch callback");
}

export default function useMovieApi() {
  const { execute, loading, results, hasErrors } = useFetch();

  const state = reactive({
    search: "Batman",
    movieId: "",
    loading: loading,
    features: results,
    hasErrors: hasErrors
  });

  watch(async () => {
    const searchValue = state.movieId
      ? `&i=${state.movieId}&plot=full`
      : `&s=${state.search}`;

    const MOVIE_API_URL = `${env.baseApi}/?apikey=${env.apiKey}&${searchValue}`;
    execute(MOVIE_API_URL);
  }, callback);

  return state;
}
