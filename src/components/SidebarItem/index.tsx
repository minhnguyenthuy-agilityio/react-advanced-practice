import { Link as ChakraLink, Icon, Text } from "@chakra-ui/react";

import { DotIcon } from "@/assets/icons";

import { ROUTES } from "@/constants";

import { Link as ReactRouterLink } from "react-router-dom";

interface SidebarItemPropType {
  iconColor: string;
  title: string;
  projectId: string;
}

export const SidebarItem = ({
  iconColor,
  title,
  projectId,
}: SidebarItemPropType) => {
  return (
    <ChakraLink
      as={ReactRouterLink}
      to={`${ROUTES.TASKS_PROJECT_DEFAULT}${projectId}`}
      display="flex"
      w="full"
      pl="3.5"
      py="12.5"
      borderRadius="6"
      alignItems="center"
      _hover={{
        textDecoration: "none",
        bgColor: "secondary.200",
      }}
    >
      <Icon mr="16px" as={DotIcon} color={iconColor} />
      <Text textOverflow="ellipsis" whiteSpace="nowrap" overflowX="hidden">
        {title}
      </Text>
    </ChakraLink>
  );
};
