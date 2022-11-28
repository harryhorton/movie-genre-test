import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { movie_mocks } from "../../data/movie_mocks";
import { Movie } from "../../types/movie";

const genres = movie_mocks
  .reduce((prev, cur): string[] => {
    let newGenres: string[] = [];

    cur.genres.forEach((genre) => {
      if (!prev.includes(genre)) {
        newGenres.push(genre);
      }
    });

    return [...prev, ...newGenres];
  }, [] as string[])
  .sort();

// const getMovie = createAsyncThunk<
//   Movie,
//   { _id: string },
//   { rejectValue: string }
// >("movies/getMovie", async ({ _id }, { rejectWithValue }) => {
//   const foundMovie = movie_mocks.find((movie) => movie._id === _id);
//   if (!foundMovie) {
//     return rejectWithValue("Movie not found");
//   }

//   return foundMovie;
// });

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    filteredMovies: [] as Movie[],
    genres,
    currentGenre: "",
  },
  reducers: {
    filterByGenre: (state, { payload }: PayloadAction<string>) => {
      state.filteredMovies = movie_mocks.filter((movie) =>
        movie.genres.includes(payload)
      );
      state.currentGenre = payload;
    },
  },
});

export const { filterByGenre } = movieSlice.actions;
