import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type GameCardContainerProp = {
  children: ReactNode;
};

export default function GameCardContainer({ children }: GameCardContainerProp) {
  return (
    <Box width={"350px"} borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
}