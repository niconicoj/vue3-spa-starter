<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">
        {{ $t("movie_list.title") }}
      </div>
    </q-card-section>
    <q-card-section v-if="movies.length == 0">
      <q-spinner color="primary" size="3em" :thickness="2" />
    </q-card-section>
    <q-card-section v-else class="grid-2-col">
      <base-movie v-for="movie in movies" :movie="movie" :key="movie.id" />
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import BaseMovie from "@/components/movies/BaseMovie.vue";
import { useStore } from "@/store";
import { computed, defineComponent } from "vue";

export default defineComponent({
  components: { BaseMovie },
  setup() {
    const store = useStore();

    const movies = computed(() => store.getters.movies);

    return {
      movies,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/app.scss";
</style>
