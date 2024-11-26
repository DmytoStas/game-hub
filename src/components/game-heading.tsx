import { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

type GameHeadingProps = {
  gameQuery: GameQuery;
};

export default function GameHeading({ gameQuery }: GameHeadingProps) {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
}
