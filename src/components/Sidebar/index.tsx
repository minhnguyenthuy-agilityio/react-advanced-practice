import { Box, Flex, Icon, Text, VStack } from "@chakra-ui/react";

import { Logo, SidebarItem } from "@/components";

import { PROJECTS } from "@/mocks";

import { TasksIcon } from "@/assets/icons";

export const SideBar = () => {
  return (
    <Box as="aside" h="full" borderRight="1px solid" borderColor="primary.400">
      <Logo />
      <Box pr="2.5" pl="0.5">
        <Flex
          alignItems="center"
          pl="4"
          py="3.5"
          borderBottom="solid 1px "
          borderColor="primary.400"
        >
          <Icon mr="3.5" as={TasksIcon} />
          <Text>Tasks</Text>
        </Flex>

        <VStack as="nav" spacing="2.5" alignItems="start">
          <Text
            pl="3"
            pt="7"
            pb="2"
            textTransform="uppercase"
            size="xs"
            fontWeight="700"
          >
            my projects
          </Text>
          {PROJECTS?.map(({ name, iconColor, projectId }, index) => (
            <SidebarItem
              key={`${name}-${index}`}
              iconColor={iconColor}
              title={name}
              projectId={projectId}
            />
          ))}
        </VStack>
      </Box>
    </Box>
  );
};
