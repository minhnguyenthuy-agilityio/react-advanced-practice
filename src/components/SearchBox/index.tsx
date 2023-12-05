import { ChangeEvent, KeyboardEvent, useState } from "react";

import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

import { SearchIcon } from "@/assets/icons";

import { useTaskListStore } from "@/hooks";

export const SearchBox = () => {
  const [keyValue, setKeyValue] = useState("");
  const { setKeyword } = useTaskListStore();

  const handleOnChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setKeyValue(event.target.value);
  };

  const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setKeyword(keyValue.trim());
    }
  };

  return (
    <InputGroup bg="primary.200" borderRadius="6px" maxW="417px">
      <InputLeftElement left="12px" top="10%" fontSize="sm">
        <Icon as={SearchIcon} />
      </InputLeftElement>
      <Input
        pl="55px"
        h="full"
        placeholder="Search for anything..."
        py="13px"
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
    </InputGroup>
  );
};
