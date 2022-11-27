import BaseMovie from "@/components/movies/BaseMovie.vue";
import { Meta, StoryFn } from "@storybook/vue3";
import { stubMovies } from "../../../tests/stubs/movieStub";

export default {
  title: "Movie/card",
  component: BaseMovie,
} as Meta<typeof BaseMovie>;

const Template: StoryFn<typeof BaseMovie> = (args) => ({
  components: { BaseMovie },
  setup() {
    return { args };
  },
  template: '<base-movie v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  movie: stubMovies()[0],
};
