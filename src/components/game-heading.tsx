import { Heading } from "@chakra-ui/react";

import usePlatformLookup from "../hooks/usePlatformLookup";
import useGenreLookup from "../hooks/useGenreLookup";
import useGameQueryStore from "../store";

export default function GameHeading() {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenreLookup(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatformLookup(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
}
