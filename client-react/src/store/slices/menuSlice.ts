import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    isMenuVisible: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuVisible = !state.isMenuVisible;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;
