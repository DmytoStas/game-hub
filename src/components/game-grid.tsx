import { GameQuery } from "../App";
import useGames from "../hooks/useGames";

import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./game-card";
import GameCardContainer from "./game-card-container";
import GameCardSkeleton from "./game-card-skeleton";
import React from "react";

type GameGridProps = {
  gameQuery: GameQuery;
};

export default function GameGrid({ gameQuery }: GameGridProps) {
  const {
    error,
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>

      {hasNextPage && (
        <Button
          marginY={5}
          onClick={() => fetchNextPage()}
          isLoading={isFetchingNextPage}
        >
          Load more
        </Button>
      )}
    </Box>
  );
}
