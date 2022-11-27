<template>
  <q-card name="movieCard">
    <q-card-section>
      <div class="text-h6">
        {{ movie.title }}
      </div>
      <div class="text-subtitle2">
        {{ movie.releaseYear }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import Movie from "@/models/movies/Movie";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    movie: {
      type: Object as PropType<Movie>,
      required: true,
    },
  },
});
</script>
