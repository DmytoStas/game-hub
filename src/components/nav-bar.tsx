import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./color-mode-switch";
import SearchInput from "./search-input";

export default function NavBar() {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize={"60px"} objectFit="cover" />
      </Link>

      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}
