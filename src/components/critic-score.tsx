import { Badge } from "@chakra-ui/react";

type CriticScoreProp = {
  score: number;
};

export default function CriticScore({ score }: CriticScoreProp) {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize={"14px"}
      paddingX={2}
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
}
