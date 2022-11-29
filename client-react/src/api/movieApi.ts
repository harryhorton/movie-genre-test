import { movie_mocks } from "../data/movie_mocks";
import { Movie } from "../types/movie";

const DELAY = 100;

export const fetchMovie = (id: string) =>
  new Promise<Movie>((resolve, reject) => {
    setTimeout(() => {
      const foundMovie = movie_mocks.find((movie) => movie._id === id);
      if (!foundMovie) return reject(new Error("Movie not found"));

      resolve(foundMovie);
    }, DELAY);
  });
