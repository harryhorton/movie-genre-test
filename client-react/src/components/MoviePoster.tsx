import { Movie } from "../types/movie";
import { Image } from "@chakra-ui/react";

export interface MoviePosterProps {
  movie: Movie;
}

export const MoviePoster = ({ movie }: MoviePosterProps) => (
  <Image src={movie.poster} h="96" w="64" mb="3" bg="gray.500" />
);
