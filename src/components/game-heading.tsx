import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
import usePlatformLookup from "../hooks/usePlatformLookup";
import useGenreLookup from "../hooks/useGenreLookup";

type GameHeadingProps = {
  gameQuery: GameQuery;
};

export default function GameHeading({ gameQuery }: GameHeadingProps) {
  const genre = useGenreLookup(gameQuery.genreId);
  const platform = usePlatformLookup(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
}
