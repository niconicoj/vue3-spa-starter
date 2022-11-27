import Movie from "@/models/movies/Movie";
import { RootState } from "@/store";
import { GetterTree } from "vuex";
import { State } from "./state";

export type Getters = {
  movies(state: State): Movie[];
  movieNames(state: State): string[];
};

export const getters: GetterTree<State, RootState> & Getters = {
  movies: (state) => state.data,
  movieNames: (state) => state.data.map((movie) => movie.title),
};
