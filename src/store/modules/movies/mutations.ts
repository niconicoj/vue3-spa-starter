import Movie from "@/models/movies/Movie";
import { MutationTree } from "vuex";
import { NewMovie } from "./contract";
import { State } from "./state";

export enum MovieMutation {
  SET_MOVIES = "SET_MOVIES",
  ADD_MOVIE = "ADD_MOVIE",
}

export type Mutations<S = State> = {
  [MovieMutation.SET_MOVIES](state: S, payload: Movie[]): void;
  [MovieMutation.ADD_MOVIE](state: S, payload: NewMovie): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MovieMutation.SET_MOVIES](state: State, movies: Movie[]) {
    state.data = movies;
  },
  [MovieMutation.ADD_MOVIE](state: State, newMovie: NewMovie) {
    state.data.push({
      id: state.data.length + 1,
      actors: [],
      ...newMovie,
    });
  },
};
