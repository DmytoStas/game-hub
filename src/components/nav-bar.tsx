import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./color-mode-switch";
import SearchInput from "./search-input";

export default function NavBar() {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize={"60px"} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}
