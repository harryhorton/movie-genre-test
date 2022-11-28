import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  List,
  ListItem,
} from "@chakra-ui/react";

export interface GenreDrawerProps {
  genres: string[];
  isOpen: boolean;
  onClose: () => void;
  onSelectGenre: (genre: string) => void;
}

export const GenreDrawer = ({
  genres,
  isOpen,
  onClose,
  onSelectGenre,
}: GenreDrawerProps) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerContent>
        <DrawerHeader>Genres</DrawerHeader>
        <DrawerBody>
          <nav>
            <List>
              {genres.map((genre) => (
                <ListItem key={genre}>
                  <Button
                    variant="unstyled"
                    onClick={() => {
                      onSelectGenre(genre);
                      onClose();
                    }}
                  >
                    {genre}
                  </Button>
                </ListItem>
              ))}
            </List>
          </nav>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
