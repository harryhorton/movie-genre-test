import { Box, HStack, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useDraggable } from "react-use-draggable-scroll";
import { MovieGenres } from "../components/MovieGenres";
import { MovieLanguages } from "../components/MovieLanguages";
import { MoviePoster } from "../components/MoviePoster";
import { MovieRating } from "../components/MovieRating";
import { useMovies } from "../hooks/useMovies";

export const HomePage = () => {
  const { filteredMovies, filterByGenre, currentGenre } = useMovies();

  const ref = useRef<any>();
  const { events } = useDraggable(ref);

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
            <MovieGenres movie={movie} />
            <MovieLanguages movie={movie} />
            <MovieRating movie={movie} />
          </Box>
        ))}
      </HStack>
    </div>
  );
};
