import { Movie } from "../types/movie";
import { Text } from "@chakra-ui/react";

export interface MovieGenresProps {
  movie: Movie;
}

export const MovieGenres = ({ movie }: MovieGenresProps) => (
  <Text fontSize="xl">{movie.genres.join(" | ")}</Text>
);
