import { reactive, watch } from "vue";

import useFetch from "@/composables/useFetch";
import env from "@/env";

export default function useMovieApi() {
  const { execute, loading, results, hasErrors } = useFetch();

  const state = reactive({
    search: "",
    movieId: "",
    loading: loading,
    features: results,
    hasErrors: hasErrors
  });

  const callback = () => {
    console.log("callback");
    console.log("search " + state.search, "movieId " + state.movieId);
  };

  watch(async () => {
    if (state.movieId || state.search) {
      const searchValue = state.movieId
        ? `&i=${state.movieId}&plot=full`
        : `&s=${state.search}`;

      const MOVIE_API_URL = `${env.baseApi}/?apikey=${env.apiKey}&${searchValue}`;
      execute(MOVIE_API_URL);
    }
  }, callback);

  return state;
}
