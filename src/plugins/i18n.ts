import { createI18n } from "vue-i18n";

import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/fr";
import isLeapYear from "dayjs/plugin/isLeapYear";
import localizedFormat from "dayjs/plugin/localizedFormat";

import en from "../locales/en.json";
import fr from "../locales/fr.json";

dayjs.extend(isLeapYear);
dayjs.extend(localizedFormat);
dayjs.locale("en");

export const i18n = createI18n({
  locale: "fr", // set locale
  fallbackLocale: "en", // set fallback locale
  messages: {
    en,
    fr,
  },
});
