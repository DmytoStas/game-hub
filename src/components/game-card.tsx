import { Game } from "@/hooks/useGames";
import getCroppedImageUrl from "@/services/image-url";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import CriticScore from "./critic-score";
import PlatformIconList from "./platform-icon-list";

type GameCardProps = {
  game: Game;
};

export default function GameCard({ game }: GameCardProps) {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />

      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />

          <CriticScore score={game.metacritic} />
        </HStack>

        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}
