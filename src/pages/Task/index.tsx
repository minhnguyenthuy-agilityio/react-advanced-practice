import { Suspense } from "react";

import { Box, Flex, Heading, Spinner } from "@chakra-ui/react";

import { useParams } from "react-router-dom";

import { FilterIcon } from "@/assets/icons";

import { PROJECTS } from "@/mocks";

import { OPTIONSFILTER, Status } from "@/constants";

import { TaskList, MenuFilter } from "@/components";

import { useTaskList, useTaskListStore } from "@/hooks";

export const TaskPage = () => {
  const { projectId } = useParams();
  const { keyword } = useTaskListStore();
  const { data: tasks, isLoading } = useTaskList(
    projectId ? projectId : "pro00",
  );

  // Currently there is no homepage so the default page will be the Mobile App project with the url /
  // List project is now mock data
  const projectName = projectId
    ? PROJECTS.find((project) => project.projectId === projectId)?.name
    : "Mobile App";

  const taskListFilter = () => {
    const statusArray = [Status.Todo, Status.Onprogress, Status.Done];

    return statusArray.map((status) => {
      let tasksByStatus = tasks?.filter((task) => task.status === status) || [];

      if (keyword) {
        tasksByStatus = tasksByStatus.filter((task) =>
          task.name.toLowerCase().includes(keyword.toLowerCase()),
        );
      }

      return <TaskList key={status} status={status} tasks={tasksByStatus} />;
    });
  };

  return (
    <Suspense
      fallback={
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="primary.300"
          size="md"
        />
      }
    >
      <Box px="40px" pt="35px" w="full" h="full" overflowY="hidden">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading size="xl">{projectName}</Heading>
          <Flex gap={2}>
            <MenuFilter
              buttonName="Filter"
              options={OPTIONSFILTER}
              icon={FilterIcon}
            />
            <MenuFilter buttonName="Today" options={OPTIONSFILTER} />
          </Flex>
        </Flex>
        <Flex justifyContent="space-between" mt="30px" h="full">
          {isLoading ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="primary.300"
              size="md"
              m="auto"
            />
          ) : (
            taskListFilter()
          )}
        </Flex>
      </Box>
    </Suspense>
  );
};
