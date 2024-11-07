import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/game-grid";
import NavBar from "./components/nav-bar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="aside">
        <Show above="lg">Aside</Show>
      </GridItem>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
