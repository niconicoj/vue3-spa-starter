import { i18n } from "@/plugins/i18n";
import "@quasar/extras/material-icons/material-icons.css";
import { app } from "@storybook/vue3";
import { Quasar } from "quasar";
import "quasar/src/css/index.sass";
// import { setupStorybookStore } from "./store";

app.use(i18n);
app.use(Quasar, {});

// setupStorybookStore();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
