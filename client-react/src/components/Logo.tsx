import { Box, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const Logo = () => {
  return (
    <Box as={NavLink} ml="4" to="/">
      <Text as="h1" color="red.600" fontSize="3xl">
        MFLIX
        <Text as="span" display="block" color="white" fontSize="md">
          by Harry Horton
        </Text>
      </Text>
    </Box>
  );
};
