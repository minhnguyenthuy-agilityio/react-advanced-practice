import { Link as ChakraLink, Heading, Icon, Text } from "@chakra-ui/react";

import { Link as ReactRouterLink } from "react-router-dom";

import { LogoIcon } from "@/assets/icons";

import { ROUTES } from "@/constants";

export const Logo = () => (
  <Heading
    as="h1"
    py="35px"
    pl="20px"
    alignItems="center"
    borderBottom="solid 1px "
    borderColor="primary.400"
  >
    <ChakraLink
      display="flex"
      as={ReactRouterLink}
      to={ROUTES.TASKS_PROJECT_DEFAULT}
      _hover={{
        textDecoration: "none",
      }}
    >
      <Icon mr="8px" w="24px" h="24px" as={LogoIcon} />
      <Text color="primary.700" size="xm" fontWeight="semibold">
        Project M.
      </Text>
    </ChakraLink>
  </Heading>
);
