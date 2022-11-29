import { Movie } from "../types/movie";
import { Text } from "@chakra-ui/react";

export interface MovieLanguagesProps {
  movie: Movie;
}

export const MovieLanguages = ({ movie }: MovieLanguagesProps) => (
  <Text fontSize="xl" color="red.500" mb="2">
    {movie.languages.join(" | ")}
  </Text>
);
