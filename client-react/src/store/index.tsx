import { configureStore } from "@reduxjs/toolkit";

import { menuSlice } from "./slices/menuSlice";
import { movieSlice } from "./slices/movieSlice";
// ...

export const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    movies: movieSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
