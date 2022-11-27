import { stubMovies } from "@/../tests/stubs/movieStub";
import MovieList from "@/components/movies/MovieList.vue";
import { useStore } from "@/store";
import { MovieMutation } from "@/store/modules/movies/mutations";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Movie/list",
  component: MovieList,
} as Meta<typeof MovieList>;

const Template: StoryFn<typeof MovieList> = (args) => ({
  components: { MovieList },
  setup() {
    const store = useStore();
    store.commit(MovieMutation.SET_MOVIES, stubMovies());
    return { args };
  },
  template: '<movie-list v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
