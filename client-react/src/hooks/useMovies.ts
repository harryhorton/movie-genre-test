import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { filterByGenre } from "../store/slices/movieSlice";

export const useMovies = () => {
  const state = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch();

  return {
    ...state,
    filterByGenre: (genre: string) => dispatch(filterByGenre(genre)),
  };
};
