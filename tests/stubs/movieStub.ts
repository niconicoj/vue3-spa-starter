import Movie from "@/models/movies/Movie";

export const stubMovies = (): Movie[] => {
  return [
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
};
