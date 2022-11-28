import { Box, HStack, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useDraggable } from "react-use-draggable-scroll";
import { MoviePoster } from "../components/MoviePoster";
import { useMovies } from "../hooks/useMovies";

export const HomePage = () => {
  const { filteredMovies, filterByGenre, currentGenre } = useMovies();

  const ref = useRef<any>(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  useEffect(() => {
    if (currentGenre === "") {
      filterByGenre("Comedy");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <HStack
        as="nav"
        ref={ref}
        {...events}
        overflowX="scroll"
        maxW="full"
        pb="3"
        alignItems="flex-start"
      >
        {filteredMovies.map((movie) => (
          <Box
            as={NavLink}
            flex="none"
            maxW="64"
            to={`/movie/${movie._id}`}
            key={movie._id}
          >
            <MoviePoster movie={movie} />
            <Text fontSize="xl">{movie.genres?.join(" | ")}</Text>
            <Text fontSize="xl" color="red.500" mb="2">
              {movie.languages?.join(" | ")}
            </Text>
            <Text
              fontSize="xl"
              bg="blue.600"
              rounded="2xl"
              px="3"
              display="inline-block"
            >
              {movie.imdb.rating} / 10
            </Text>
          </Box>
        ))}
      </HStack>
    </div>
  );
};
