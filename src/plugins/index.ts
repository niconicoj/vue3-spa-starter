/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { i18n } from "./i18n";
import { quasar } from "./quasar";
import { loadFonts } from "./webfontloader";

// Types
import type { App } from "vue";

export function registerPlugins(app: App) {
  loadFonts();
  app.use(i18n);
  app.use(quasar.plugin, quasar.opts);
}
