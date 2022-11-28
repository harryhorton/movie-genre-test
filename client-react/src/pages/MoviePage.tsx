import { Box, Stack, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../api/movieApi";
import { MoviePoster } from "../components/MoviePoster";

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
          <Text mb="3">{movie?.fullplot}</Text>
          <Text>Cast: {movie?.cast.join(", ")}</Text>
        </Box>
      </Stack>
    </Box>
  );
};
