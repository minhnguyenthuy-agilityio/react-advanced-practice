import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

import { SearchIcon } from "@/assets/icons";

export const SearchBox = () => {
  return (
    <InputGroup bg="primary.200" borderRadius="6px" maxW="417px">
      <InputLeftElement left="3" top="10%" fontSize="sm">
        <Icon as={SearchIcon} />
      </InputLeftElement>
      <Input
        pl="55px"
        h="full"
        placeholder="Search for anything..."
        py="13px"
      />
    </InputGroup>
  );
};
