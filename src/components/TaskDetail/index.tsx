import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Badge,
  Heading,
  Flex,
  AvatarGroup,
  Avatar,
  Icon,
  Text,
  Image,
  Center,
} from "@chakra-ui/react";

import { PRIORITY_MAPPING, Status } from "@/constants";

import { Task } from "@/interfaces";

import { FolderIcon, MessageIcon } from "@/assets/icons";

import { Gallery } from "@/assets/images";

interface TaskDetailProps extends Omit<Task, "id" | "projectId" | "createdAt"> {
  isOpenDetail: boolean;
  onCloseDetail: () => void;
}

export const TaskDetail = ({
  isOpenDetail,
  onCloseDetail,
  priority,
  name,
  description,
  image,
  assignees,
  comments,
  files,
  status,
}: TaskDetailProps) => {
  const { color, bgColor, label } = PRIORITY_MAPPING[priority];

  return (
    <Modal isOpen={isOpenDetail} onClose={onCloseDetail}>
      <ModalOverlay />
      <ModalContent maxW="848px" h="80%" px="70px" py="60px" borderRadius="30">
        <ModalHeader p="0px">
          <Badge
            color={status === Status.Done ? "success.400" : color}
            bgColor={status === Status.Done ? "success.300" : bgColor}
          >
            {status === Status.Done ? "Completed" : label}
          </Badge>

          <Heading size="lg" my="20px" as="h3">
            {name}
          </Heading>
        </ModalHeader>
        <ModalCloseButton top="30px" right="20px" />
        <ModalBody p="0px" overflowY="auto">
          {image ? (
            <Image
              mb="10px"
              w="full"
              h="233px"
              borderRadius="6px"
              alt="background task"
              objectFit="cover"
              src={image}
            />
          ) : (
            <Center
              mb="10px"
              bg="primary.300"
              borderRadius="10"
              py="50px"
              w="full"
              h="233px"
            >
              <Image
                borderRadius="6px"
                h="40px"
                w="40px"
                alt="background task"
                src={Gallery}
              />
            </Center>
          )}

          <Flex my="20px" justifyContent="space-between" alignItems="center">
            <AvatarGroup spacing="-4px" size="xs" max={5}>
              {assignees?.map(({ avatar, name }, index) => (
                <Avatar name="assignee" key={`${name}-${index}`} src={avatar} />
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

          <Text color={description ? "secondary.400" : "primary.500"}>
            {description ? description : " No description provided"}
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
