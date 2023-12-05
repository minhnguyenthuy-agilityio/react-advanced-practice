import { FC, memo } from "react";

import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { ArrowDownFilterIcon } from "@/assets/icons";

interface MenuFilterProps {
  buttonName: string;
  options: string[];
  icon?: FC<React.SVGProps<SVGSVGElement>>;
}

export const MenuFilter = memo(
  ({ buttonName, options, icon }: MenuFilterProps) => {
    return (
      <Menu>
        <MenuButton
          as={Button}
          variant="outline"
          leftIcon={icon && <Icon data-testid="icon-button-menu" as={icon} />}
          rightIcon={<Icon as={ArrowDownFilterIcon} />}
          w="122px"
          maxH="40px"
          fontWeight="medium"
        >
          {buttonName}
        </MenuButton>
        <MenuList>
          {options?.map((option, index) => (
            <MenuItem
              data-testid="menu-item"
              key={`${option}-${index}`}
              _hover={{
                bgColor: "secondary.200",
              }}
            >
              {option}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
  },
);
