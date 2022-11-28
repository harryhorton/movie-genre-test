import { BellIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Button, HStack, Spacer } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { GenreDrawer } from "../components/GenreDrawer";
import { Logo } from "../components/Logo";
import { useMenu } from "../hooks/useMenu";
import { useMovies } from "../hooks/useMovies";

export const AppLayout = ({ children }: { children?: ReactNode }) => {
  const { toggleMenu, isMenuVisible } = useMenu();
  const { genres, filterByGenre } = useMovies();
  const navigate = useNavigate();
  return (
    <div>
      <HStack as="header" p="4" alignItems="center">
        <Button variant="ghost" onClick={toggleMenu}>
          <HamburgerIcon h={8} w={8} />
        </Button>
        <Logo />
        <Spacer />
        <BellIcon h={8} w={9} />
      </HStack>
      <main>{children}</main>
      <GenreDrawer
        isOpen={isMenuVisible}
        onClose={toggleMenu}
        onSelectGenre={(genre) => {
          filterByGenre(genre);
          navigate("/");
        }}
        genres={genres}
      />
    </div>
  );
};
