import { i18n } from "@/plugins/i18n";
import {
  mount as baseMount,
  shallowMount as baseShallowMount,
} from "@vue/test-utils";
import { Quasar } from "quasar";

export const mount = (component: any) => {
  return baseMount(component, {
    global: {
      plugins: [i18n, Quasar],
    },
  });
};

export const shallowMount = (component: any) => {
  return baseShallowMount(component, {
    global: {
      plugins: [i18n, Quasar],
    },
  });
};
