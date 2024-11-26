import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./color-mode-switch";
import SearchInput from "./search-input";

type NavBarProps = {
  onSearch: (searchText: string) => void;
};

export default function NavBar({ onSearch }: NavBarProps) {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize={"60px"} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}
