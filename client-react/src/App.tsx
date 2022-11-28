import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { theme } from "./theme";
import { Provider } from "react-redux";
import { store } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
