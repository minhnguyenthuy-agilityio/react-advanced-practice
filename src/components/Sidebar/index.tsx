import { Box, Flex, Icon, Text, VStack } from "@chakra-ui/react";

import { useParams } from "react-router-dom";

import { Logo, SidebarItem } from "@/components";

import { PROJECTS } from "@/mocks";

import { TasksIcon } from "@/assets/icons";

export const SideBar = () => {
  const { projectId } = useParams();
  const project = projectId ? projectId : "";

  return (
    <Box as="aside" h="full" borderRight="1px solid" borderColor="primary.400">
      <Logo />
      <Box pr="10px" pl="2px">
        <Flex
          alignItems="center"
          pl="16px"
          py="14px"
          borderBottom="solid 1px"
          borderColor="primary.400"
        >
          <Icon mr="14px" as={TasksIcon} />
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
              isActive={project === projectId}
            />
          ))}
        </VStack>
      </Box>
    </Box>
  );
};
