import { createLogger, createStore } from "vuex";

import { store as movies, MoviesStore } from "@/store/modules/movies";
import { State as MovieState } from "@/store/modules/movies/state";

export type RootState = {
  movies: MovieState;
};

export type Store = MoviesStore<Pick<RootState, "movies">>;

const debug = process.env.NODE_ENV !== "production";
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
  plugins,
  modules: {
    movies,
  },
});

export function useStore(): Store {
  return store as Store;
}
