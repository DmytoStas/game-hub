import { useParams } from "react-router-dom";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";

import useGame from "../hooks/useGame";
import ExpendableText from "../components/expendable-text";
import GameAttributes from "../components/game-attributes";
import GameTrailer from "../components/game-trailer";
import GameScreenshots from "../components/game-screenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpendableText>{game.description_raw}</ExpendableText>
        <GameAttributes game={game} />
      </GridItem>

      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
