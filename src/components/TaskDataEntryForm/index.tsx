import { useParams } from "react-router-dom";

import { useForm } from "react-hook-form";

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  useToast,
} from "@chakra-ui/react";

import { TaskParam } from "@/interfaces";

import { PRIORITY_MAPPING, MESSAGES, Priority, Status } from "@/constants";

import { isValidImageUrl } from "@/helpers";

import { useMutationAddTask } from "@/hooks";

interface TaskDataEntryFormProps {
  isOpenForm: boolean;
  handleClose: () => void;
  defaultValues?: TaskParam;
}

const initialValues: TaskParam = {
  name: "",
  createdAt: new Date().toISOString(),
  priority: Priority.Low,
  projectId: "",
  status: Status.Todo,
  description: "",
  image: "",
};

export const TaskDataEntryForm = ({
  isOpenForm,
  handleClose,
  defaultValues,
}: TaskDataEntryFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<TaskParam>({
    defaultValues: defaultValues || initialValues,
  });
  const { mutate: mutateAdd, isSuccess, isError } = useMutationAddTask();
  const { projectId } = useParams();
  const toast = useToast();

  const titleForm = defaultValues ? "Edit Task" : "Create Task";

  const onCloseForm = () => {
    reset();
  };

  const onSubmit = (data: TaskParam) => {
    const taskNew = {
      ...data,
      projectId: projectId ? projectId : "pro00",
    };

    mutateAdd(taskNew);

    isError && toast({ title: MESSAGES.ADD_FAIL, status: "error" });

    if (isSuccess) {
      handleClose();
      reset();
      toast({
        title: MESSAGES.ADD_TASK_SUCCESS,
        status: "success",
      });
    }
  };

  return (
    <Modal size="xl" isOpen={isOpenForm} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent textAlign="center" borderRadius="10px" as="div" p="30px">
        <ModalHeader p={10}>{titleForm}</ModalHeader>

        <ModalCloseButton onClick={onCloseForm} />

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={6}>
            <FormControl isInvalid={!!errors.name}>
              <FormLabel>Task Name</FormLabel>
              <Input
                fontSize="base"
                placeholder="Name"
                {...register("name", {
                  required: MESSAGES.FIELD_NAME_EMPTY,
                  minLength: {
                    value: 4,
                    message: MESSAGES.FIELD_NAME_LENGTH,
                  },
                })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input
                fontSize="base"
                placeholder="Here is description"
                {...register("description")}
              />
            </FormControl>

            <FormControl isInvalid={!!errors.priority}>
              <FormLabel>Priority</FormLabel>
              <Select
                color="primary.500"
                focusBorderColor="primary.500"
                fontSize="base"
                placeholder="Select priority"
                {...register("priority", {
                  required: MESSAGES.FIELD_PRIORITY_EMPTY,
                })}
              >
                {Object.entries(PRIORITY_MAPPING).map(
                  ([priorityKey, priorityValue]) => (
                    <option key={priorityKey} value={priorityKey}>
                      {priorityValue.label}
                    </option>
                  ),
                )}
              </Select>
              <FormErrorMessage>
                {errors.priority && errors.priority.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.image}>
              <FormLabel>Image</FormLabel>
              <Input
                fontSize="base"
                placeholder="http://"
                {...register("image", {
                  validate: (value) => {
                    if (!isValidImageUrl(value)) {
                      return MESSAGES.FIELD_IMAGE_INVALID;
                    }
                  },
                })}
              />
              <FormErrorMessage>
                {errors.image && errors.image.message}
              </FormErrorMessage>
            </FormControl>

            <Button
              mt={4}
              bgColor="primary"
              isLoading={isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Stack>
        </form>
      </ModalContent>
    </Modal>
  );
};
