import { extendTheme, Theme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: { initialColorMode: "dark", useSystemColorMode: false },
} as Theme);
