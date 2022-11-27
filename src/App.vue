<template>
  <main>
    <movie-list class="mb-16" />
    <add-movie-form />
  </main>
</template>

<script lang="ts">
import AddMovieForm from "@/components/forms/AddMovieForm.vue";
import MovieList from "@/components/movies/MovieList.vue";

import { useStore } from "@/store";
import { computed, defineComponent } from "vue";
import { MovieAction } from "./store/modules/movies/actions";

export default defineComponent({
  components: { MovieList, AddMovieForm },
  setup() {
    const store = useStore();
    store.dispatch(MovieAction.FETCH_MOVIES, undefined);
    const movies = computed(() => store.state.movies.data);

    return {
      movies,
    };
  },
});
</script>
<style lang="scss">
@import "@/styles/app.scss";
</style>
