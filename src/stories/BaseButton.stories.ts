import BaseButton from "@/components/common/BaseButton.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Common/button",
  component: BaseButton,
} as Meta<typeof BaseButton>;

const Template: StoryFn<typeof BaseButton> = (args) => ({
  components: { BaseButton },
  setup() {
    return { args };
  },
  template: '<base-button v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
