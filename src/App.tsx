import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/game-grid";
import GameHeading from "./components/game-heading";
import GenreList from "./components/genre-list";
import NavBar from "./components/nav-bar";
import PlatformSelector from "./components/platform-selector";
import SortSelector from "./components/sort-selector";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>

        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
