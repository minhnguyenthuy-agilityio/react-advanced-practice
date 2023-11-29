import { Box } from "@chakra-ui/react";

import { TaskCard } from "@/components";

import { TASK } from "@/mocks";
import { PriorityLevel } from "@/constants";

// data example
// where data is declared just to simulate ui
const test = {
  name: "Brainstorming",
  createdAt: new Date(),
  priority: PriorityLevel.Completed,
  description:
    "Brainstorming brings team members' diverse experience into play.",
  image:
    "https://res.cloudinary.com/de2x8dwvf/image/upload/v1695227531/test_y38vvw.webp",
};

export const TaskPage = () => {
  const { name, priority, description, image } = test;
  return (
    <Box bg="primary.200" p="50px" w="full" h="full">
      <TaskCard
        name={name}
        priority={priority}
        description={description}
        image={image}
        assignees={TASK.assignees}
        comments={TASK.comments}
        files={TASK.files}
      />
    </Box>
  );
};
