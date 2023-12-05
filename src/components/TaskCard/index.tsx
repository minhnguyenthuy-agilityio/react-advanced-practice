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
  useDisclosure,
} from "@chakra-ui/react";

import { TASK_STATUS, PRIORITY_MAPPING, Status } from "@/constants";

import { Task } from "@/interfaces";

import { TaskDetail } from "@/components";

import { Gallery } from "@/assets/images";

import { FolderIcon, MessageIcon, DotsIcon } from "@/assets/icons";

import { useMutationUpdateTask } from "@/hooks";

export const TaskCard = memo(
  ({
    id,
    createdAt,
    name,
    priority,
    description,
    image,
    projectId,
    assignees,
    comments,
    files,
    status,
  }: Task) => {
    const { color, bgColor, label } = PRIORITY_MAPPING[priority];
    const {
      isOpen: isOpenDetail,
      onClose: onCloseDetail,
      onOpen: onOpenDetail,
    } = useDisclosure();
    const { mutate: mutateUpdated } = useMutationUpdateTask(id);

    const handleChangeStatus = (status: Status) => {
      const dataUpdated = {
        name,
        createdAt,
        priority,
        projectId,
        status: status,
        description,
        image,
      };

      mutateUpdated(dataUpdated);
    };

    return (
      <Box
        as="article"
        w="full"
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
          <Badge
            color={status === Status.Done ? "success.400" : color}
            bgColor={status === Status.Done ? "success.300" : bgColor}
          >
            {status === Status.Done ? "Completed" : label}
          </Badge>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<Icon as={DotsIcon} />}
              bg="none"
              _hover={{ bg: "none" }}
            />
            <MenuList>
              {TASK_STATUS?.map(({ status, label }, index) => (
                <MenuItem
                  key={`${label}-${index}`}
                  textTransform="capitalize"
                  _hover={{
                    bgColor: "secondary.200",
                  }}
                  onClick={() => handleChangeStatus(status)}
                >
                  {label}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>

        <TaskDetail
          isOpenDetail={isOpenDetail}
          onCloseDetail={onCloseDetail}
          name={name}
          priority={priority}
          description={description}
          image={image}
          assignees={assignees}
          comments={comments}
          files={files}
          status={status}
        />

        <Box onClick={onOpenDetail} data-testid="task-01">
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
            color={description ? "secondary.400" : "primary.500"}
            size="xs"
            textTransform="capitalize"
          >
            {description ? description : " No description provided"}
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
      </Box>
    );
  },
);
