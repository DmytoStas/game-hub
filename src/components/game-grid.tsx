import useGames from "@/hooks/UseGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./game-card";

export default function GameGrid() {
  const { error, games } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} padding={10} spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}
