import { describe, expect, it } from "vitest";

import { getters } from "@/store/modules/movies/getters";
import { stubMovies } from "tests/stubs/movieStub";
import { State } from "@/store/modules/movies/state";

const { movieNames } = getters;

describe("getMovieNames", () => {
  it("returns a list of all the movies name", () => {
    const state: State = { data: stubMovies() };
    expect(movieNames(state)).toEqual([
      "The Shawshank Redemption",
      "The Godfather",
    ]);
  });
});
