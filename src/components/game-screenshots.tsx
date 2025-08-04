import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

type PropsT = {
  gameId: number;
};

const GameScreenshots = ({ gameId }: PropsT) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((e) => (
        <Image key={e.id} src={e.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
