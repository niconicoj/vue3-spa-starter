import Movie from "@/models/movies/Movie";

export type State = {
  data: Movie[];
};

export const state: State = {
  data: [],
};
