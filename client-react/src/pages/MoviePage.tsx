import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../api/movieApi";
import { MovieGenres } from "../components/MovieGenres";
import { MovieLanguages } from "../components/MovieLanguages";
import { MoviePoster } from "../components/MoviePoster";
import { MovieRating } from "../components/MovieRating";

export const MoviePage = () => {
  const params = useParams<{ id: string }>();
  const {
    data: movie,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["movieData", params.id],
    retry: false,
    queryFn: () => fetchMovie(params.id!),
  });

  if (error instanceof Error) return <Box p="6">{error.message}</Box>;

  if (isLoading && !movie) return <Box p="6">loading</Box>;

  if (!movie) return <Box p="6">Movie not found</Box>;

  return (
    <Box p="6">
      <Stack flexDir={["column", "row"]} justify="stretch">
        <Box mr="6" mb="6" flexShrink="0">
          <MoviePoster movie={movie!} />
        </Box>
        <Box flex="auto">
          <Text fontSize="2xl" mb="3">
            {movie?.title}
          </Text>
          <HStack mb="6">
            <MovieGenres movie={movie} />
            <MovieLanguages movie={movie} />
            <MovieRating movie={movie} />
          </HStack>
          <Text mb="6">{movie.fullplot}</Text>
          <Text>Cast: {movie.cast.join(", ")}</Text>
          {movie.writers && <Text>Writers: {movie.writers?.join(", ")}</Text>}
          <Text>
            Awards: {movie.awards.map((award) => award.text).join(", ")}
          </Text>
          {movie.writers && <Text>Writers: {movie.writers?.join(", ")}</Text>}
          <Text>Countries: {movie.countries.join(", ")}</Text>
          <Text>Directors: {movie.directors.join(", ")}</Text>
          {movie.rated && <Text>Rating: {movie.rated}</Text>}
          {movie.released && (
            <Text>Released: {new Date(movie.released).toDateString()}</Text>
          )}
          <Text>Year: {movie.year}</Text>
          <Text>Runtime: {movie.runtime}</Text>
        </Box>
      </Stack>
    </Box>
  );
};
