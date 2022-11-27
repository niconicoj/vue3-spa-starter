import * as store from "@/store";
import { stubMovies } from "tests/stubs/movieStub";

vi.mock("@/store", () => {
  const mockStore = {
    dispatch: vi.fn(),
    commit: vi.fn(),
    getters: {
      movies: stubMovies(),
    },
  };

  return {
    store: mockStore,
    useStore: () => {
      return mockStore as unknown as store.Store;
    },
  };
});
