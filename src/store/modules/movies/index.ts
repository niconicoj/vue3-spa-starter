import {
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
  Module,
} from "vuex";

import { state } from "./state";
import type { State } from "./state";
import { actions, Actions } from "@/store/modules/movies/actions";
import { getters, Getters } from "./getters";
import { mutations, Mutations } from "./mutations";
import { RootState } from "@/store";

export type MoviesStore<S = State> = Omit<
  VuexStore<S>,
  "getters" | "commit" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

export const store: Module<State, RootState> = {
  state,
  getters,
  mutations,
  actions,
};
