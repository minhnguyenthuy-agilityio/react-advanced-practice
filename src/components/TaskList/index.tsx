import {
  Box,
  Flex,
  Icon,
  IconButton,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

import { DotIcon, AddIcon } from "@/assets/icons";

import { Task } from "@/interfaces";

import { TASK_STATUS, Status } from "@/constants";

import { TaskCard, TaskDataEntryForm } from "@/components";

interface TaskListProps {
  status: Status;
  tasks: Task[];
}

export const TaskList = ({ status, tasks }: TaskListProps) => {
  const {
    isOpen: isOpenForm,
    onClose: onCloseForm,
    onOpen: onOpenForm,
  } = useDisclosure();
  const { label, colorStatus } = TASK_STATUS[status];

  return (
    <Box
      maxW="354px"
      w="32%"
      as="section"
      bg="primary.200"
      h="full"
      overflowY="scroll"
      px="20px"
      borderTopRadius="16"
      sx={{
        // Hide scroll bars on Internet Explorer/Edge
        "-ms-overflow-style": "none",
        // Hide vertical scroll bars on Chrome, Edge and Safari
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <TaskDataEntryForm isOpenForm={isOpenForm} handleClose={onCloseForm} />

      <Box bg="primary.200" position="sticky" top="0px" mb="20px" zIndex="1">
        <Flex
          top="0px"
          py="15px"
          justifyContent="space-between"
          borderBottom="solid 3px"
          borderColor={colorStatus}
        >
          <Flex alignItems="center" gap={3}>
            <Icon as={DotIcon} color={colorStatus} />
            <Text
              data-testid="column-name"
              color="primary.700"
              fontWeight="medium"
            >
              {label}
            </Text>
            <Text
              size="xs"
              display="inline-block"
              borderRadius="20"
              bg="primary.300"
              py="2px"
              px="8px"
            >
              {tasks.length}
            </Text>
          </Flex>
          {status === Status.Todo && (
            <IconButton
              icon={<Icon as={AddIcon} />}
              p="5px"
              bg="secondary.200"
              borderRadius="5px"
              aria-label="Add Task"
              _hover={{
                bg: "purple",
              }}
              onClick={onOpenForm}
            />
          )}
        </Flex>
      </Box>
      <VStack spacing={5}>
        {tasks.map((task, index) => (
          <TaskCard key={`${task.name}-${index}`} {...task} />
        ))}
      </VStack>
    </Box>
  );
};
