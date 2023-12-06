import { Link as ChakraLink, Icon, Text } from "@chakra-ui/react";

import { DotIcon } from "@/assets/icons";

import { ROUTES } from "@/constants";

import { Link as ReactRouterLink } from "react-router-dom";

interface SidebarItemPropType {
  iconColor: string;
  title: string;
  projectId: string;
  isActive?: boolean;
}

export const SidebarItem = ({
  iconColor,
  title,
  projectId,
  isActive,
}: SidebarItemPropType) => {
  return (
    <ChakraLink
      as={ReactRouterLink}
      to={`${ROUTES.TASKS_PROJECT_DEFAULT}${projectId}`}
      display="flex"
      w="full"
      pl="14px"
      py="12px"
      borderRadius="6px"
      alignItems="center"
      background={isActive ? "secondary.200" : "transparent"}
      _hover={{
        textDecoration: "none",
        bgColor: "secondary.200",
      }}
    >
      <Icon mr="16px" as={DotIcon} color={iconColor} />
      <Text
        textOverflow="ellipsis"
        whiteSpace="nowrap"
        color={isActive ? "primary.700" : "primary.500"}
        fontWeight={isActive ? "semibold" : "medium"}
        overflowX="hidden"
      >
        {title}
      </Text>
    </ChakraLink>
  );
};
