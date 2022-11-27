import { NewMovie } from "@/store/modules/movies/contract";
import { State } from "@/store/modules/movies/state";
import { describe, expect, it } from "vitest";
import { stubMovies } from "../../../../stubs/movieStub";

import { mutations } from "@/store/modules/movies/mutations";

const { SET_MOVIES, ADD_MOVIE } = mutations;

describe("setMovies", () => {
  it("set the movies", () => {
    const state: State = { data: [] };

    expect(state.data).toEqual([]);
    SET_MOVIES(state, stubMovies());
    expect(state.data).toEqual(stubMovies());
  });
});

describe("addMovies", () => {
  it("adds a movie", () => {
    const state: State = { data: [] };

    const request: NewMovie = {
      title: "Pulp fiction",
      releaseYear: 1994,
    };

    expect(state.data.length).toEqual(0);
    ADD_MOVIE(state, request);
    expect(state.data.length).toEqual(1);
    expect(state.data[0]).toEqual({
      id: 1,
      title: request.title,
      releaseYear: request.releaseYear,
      actors: [],
    });
  });
});
