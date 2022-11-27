import Actor from "./Actor";

type Movie = {
  id: number;
  title: string;
  releaseYear: number;
  actors: Actor[];
};

export default Movie;
