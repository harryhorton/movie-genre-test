import { Movie } from "../types/movie";
import { Text } from "@chakra-ui/react";

export interface MovieRatingProps {
  movie: Movie;
}

export const MovieRating = ({ movie }: MovieRatingProps) => (
  <Text fontSize="xl" bg="blue.600" rounded="2xl" px="3" display="inline-block">
    {movie.imdb.rating} / 10
  </Text>
);
