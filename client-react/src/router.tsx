import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";
import { HomePage } from "./pages/HomePage";
import { MoviePage } from "./pages/MoviePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLayout>
        <HomePage />
      </AppLayout>
    ),
  },
  {
    path: "/movie/:id",
    element: (
      <AppLayout>
        <MoviePage />
      </AppLayout>
    ),
  },
]);
