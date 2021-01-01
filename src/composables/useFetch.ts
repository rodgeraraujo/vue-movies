import { ref } from "vue";

export default function useFetch() {
  const results = ref([]);
  const loading = ref(false);
  const hasErrors = ref(null);

  const execute = async (url: string) => {
    loading.value = true;

    try {
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);

      results.value = data;
    } catch (err) {
      hasErrors.value = err;
    } finally {
      loading.value = false;
    }
  };

  return { results, loading, hasErrors, execute };
}