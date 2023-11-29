import { Avatar, Box, Flex, Icon, Text } from "@chakra-ui/react";

import { SearchBox } from "@/components";

import { USER } from "@/mocks";

import { ArrowDownIcon } from "@/assets/icons";

export const Header = () => {
  return (
    <Flex
      as="header"
      borderBottom="1px solid"
      borderColor="primary.400"
      px="55px"
      py="25px"
      justifyContent="space-between"
      alignItems="center"
    >
      <SearchBox />
      <Flex alignItems="center">
        <Box mr="20px" textAlign="right">
          <Text color="primary.700">{USER.name}</Text>
          <Text size="sm">{USER.country}</Text>
        </Box>
        <Avatar mr="10px" w="38px" h="38px" src={USER.avatar} />
        <Icon as={ArrowDownIcon} />
      </Flex>
    </Flex>
  );
};
