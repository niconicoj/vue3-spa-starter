import Movie from "@/models/movies/Movie";
import { RootState } from "@/store";
import { ActionContext, ActionTree } from "vuex";
import { NewMovie } from "./contract";
import { MovieMutation, Mutations } from "./mutations";
import { State } from "./state";

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, "commit">;

export enum MovieAction {
  FETCH_MOVIES = "FETCH_MOVIES",
  SAVE_MOVIE = "SAVE_MOVIE",
}

export type Actions = {
  [MovieAction.FETCH_MOVIES]({ commit }: AugmentedActionContext): Promise<void>;
  [MovieAction.SAVE_MOVIE](
    { commit }: AugmentedActionContext,
    newMovie: NewMovie
  ): Promise<void>;
};

export const actions: ActionTree<State, RootState> & Actions = {
  async [MovieAction.FETCH_MOVIES]({ commit }) {
    return new Promise(() => {
      setTimeout(() => {
        console.debug("FETCH_MOVIES");
        const data: Movie[] = [
          {
            id: 1,
            title: "The Shawshank Redemption",
            releaseYear: 1994,
            actors: [
              {
                lastname: "Morgan",
                firstname: "Freeman",
                dateOfBirth: new Date(1937, 5, 1),
              },
            ],
          },
          {
            id: 2,
            title: "The Godfather",
            releaseYear: 1972,
            actors: [
              {
                lastname: "Marlon",
                firstname: "Brando",
                dateOfBirth: new Date(1924, 3, 3),
              },
            ],
          },
        ];
        commit(MovieMutation.SET_MOVIES, data);
        return true;
      }, 500);
    });
  },
  async [MovieAction.SAVE_MOVIE]({ commit }, payload: NewMovie) {
    commit(MovieMutation.ADD_MOVIE, payload);
  },
};
