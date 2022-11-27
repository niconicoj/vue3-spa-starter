<template>
  <q-form ref="addMovieForm">
    <q-input
      filled
      name="movieTitle"
      v-model="movieTitle"
      :label="$t('forms.add_movie.inputs.title')"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || $t('validation.required')]"
    />
    <q-input
      filled
      name="movieReleaseYear"
      v-model.number="movieReleaseYear"
      :label="$t('forms.add_movie.inputs.release_year')"
      lazy-rules
      :rules="[(val) => val || $t('validation.required')]"
    />
    <div>
      <q-btn
        name="reset"
        :label="$t('forms.add_movie.actions.reset')"
        @click="onReset"
      />
      <q-btn
        name="submit"
        :label="$t('forms.add_movie.actions.submit')"
        color="primary"
        class="q-ml-sm"
        @click="onSubmit"
      />
    </div>
  </q-form>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { MovieAction } from "@/store/modules/movies/actions";
import { QForm } from "quasar";
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  emits: ["add:movie"],
  setup() {
    const store = useStore();

    const addMovieForm: Ref<QForm | null> = ref(null);
    const movieTitle = ref("");
    const movieReleaseYear = ref(null);

    const validate = async () => {
      const success = await addMovieForm.value?.validate();
      if (success) {
        await store.dispatch(MovieAction.SAVE_MOVIE, {
          title: movieTitle.value,
          releaseYear: movieReleaseYear.value!,
        });
      } else {
        console.log("error");
      }
    };

    // to reset validations:
    function reset() {
      addMovieForm.value?.resetValidation();
    }

    const onSubmit = () => {
      validate();
    };

    const onReset = () => {
      reset();
    };

    return {
      onSubmit,
      onReset,
      movieTitle,
      movieReleaseYear,
      addMovieForm,
    };
  },
});
</script>
