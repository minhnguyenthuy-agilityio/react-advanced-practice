import { memo } from "react";
import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

import { TASK_STATUS } from "@/constants";

import { TaskInformation, Assignee } from "@/interfaces";

import Gallery from "@/assets/images/gallery.png";

import { FolderIcon, MessageIcon, ThreeDots } from "@/assets/icons";

interface TaskCardProps extends TaskInformation {
  assignees: Assignee[];
  files: number;
  comments: number;
}

export const TaskCard = memo(
  ({
    name,
    priority,
    description,
    image,
    assignees,
    comments,
    files,
  }: TaskCardProps) => {
    return (
      <Box
        as="article"
        maxW="314px"
        minH="177px"
        maxH="328px"
        borderRadius="16px"
        border="solid 1px"
        borderColor="primary.100"
        transition="0.5s"
        p="20px"
        bg="primary.100"
        _hover={{ borderColor: "primary.500" }}
      >
        <Flex justifyContent="space-between">
          <Badge variant={priority}>{priority}</Badge>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ThreeDots />}
              bg="none"
              _hover={{ bg: "none" }}
            />
            <MenuList>
              {TASK_STATUS?.map(({ label }, index) => (
                <MenuItem key={`${label}-${index}`} textTransform="capitalize">
                  {label}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>

        <Heading
          my="8px"
          size="md"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          overflowX="hidden"
          overflowY="hidden"
          textTransform="capitalize"
        >
          {name}
        </Heading>

        {image ? (
          <Image
            mb="10px"
            h="110px"
            w="full"
            borderRadius="6px"
            alt="background task"
            objectFit="cover"
            src={image}
          />
        ) : (
          <Center mb="10px" bg="primary.300" borderRadius="10" py="50px">
            <Image
              borderRadius="6px"
              h="40px"
              w="40px"
              alt="background task"
              src={Gallery}
            />
          </Center>
        )}

        <Text
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          overflowX="hidden"
          mb="16px"
          color="secondary.400"
          size="xs"
          textTransform="capitalize"
        >
          {description}
        </Text>

        <Flex mt="8px" justifyContent="space-between" alignItems="center">
          <AvatarGroup spacing="-4px" size="xs" max={5}>
            {assignees?.map(({ avatar, name }, index) => (
              <Avatar key={`${name}-${index}`} src={avatar} />
            ))}
          </AvatarGroup>
          <Flex gap={2}>
            <Flex>
              <Icon as={MessageIcon} />
              <Text ml={1} size="xs">
                {`${comments} ${comments <= 1 ? "comment" : "comments"}`}
              </Text>
            </Flex>
            <Flex>
              <Icon as={FolderIcon} />
              <Text ml={1} size="xs">
                {`${files} ${files <= 1 ? "file" : "files"}`}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    );
  },
);
