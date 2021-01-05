<template>
  <form @submit.prevent="handleSearch()" class="search-box">
    <label for="search">.</label>
    <input
      id="search"
      type="text"
      :placeholder="placeholder"
      v-model="searchTerm"
      @keyup="handleChange"
    />
    <input type="submit" value="Search" />
  </form>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "Search",
  props: ["search", "placeholder"],
  setup(props: Readonly<{ search?: string }>, { emit }: Record<string, any>) {
    const searchTerm = ref(props.search);

    const handleSearch = (): void => {
      emit("search", searchTerm.value);
    };

    const handleChange = (event: any): void => {
      searchTerm.value = event.target.value;
    };

    return {
      searchTerm,
      handleSearch,
      handleChange
    };
  }
};
</script>

<style scoped lang="scss">
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
      background-color: #374f62;
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
      background-color: #246048;
      padding: 16px;
      border-radius: 8px;
      color: #fff;
      font-size: 20px;
      text-transform: uppercase;
      transition: 0.4s;
      &:active {
        background-color: #1d4e3a;
      }
    }
  }
  label {
    position: relative;
    color: transparent;
  }
}
</style>
