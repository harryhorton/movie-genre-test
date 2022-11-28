import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { toggleMenu } from "../store/slices/menuSlice";

export const useMenu = () => {
  const state = useSelector((state: RootState) => state.menu);
  const dispatch = useDispatch();

  return {
    ...state,
    toggleMenu: () => dispatch(toggleMenu()),
  };
};
