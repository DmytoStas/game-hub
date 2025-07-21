import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatformLookup from "../hooks/usePlatformLookup";

type PlatformSelectorProps = {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
};

export default function PlatformSelector({
  onSelectPlatform,
  selectedPlatformId,
}: PlatformSelectorProps) {
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatformLookup(selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
