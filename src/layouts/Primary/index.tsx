import { Box, Container, Flex } from "@chakra-ui/react";

import { Header, SideBar } from "@/components";
import { Outlet } from "react-router-dom";

export const PrimaryLayout = () => {
  return (
    <Flex h="100vh" w="100vw">
      <Box w="230px" h="full">
        <SideBar />
      </Box>

      <Flex flex="1" direction="column" h="full">
        <Header />

        <Container as="main" flex="1" h="full" overflowY="auto" maxW="1440px">
          <Outlet />
        </Container>
      </Flex>
    </Flex>
  );
};
