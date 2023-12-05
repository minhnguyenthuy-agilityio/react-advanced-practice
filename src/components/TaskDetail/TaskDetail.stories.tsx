import type { Meta } from "@storybook/react";

import { TaskDetail } from "@/components";

import { TASK } from "@/mocks";

import { Priority } from "@/constants";

const meta = {
  title: "Components/TaskDetail",
  component: TaskDetail,
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;

export const TaskDetailComponent = {
  args: {
    name: "Brainstorming",
    createdAt: new Date(),
    priority: Priority.High,
    description:
      "Brainstorming brings team members' diverse experience into play.",
    image:
      "https://res.cloudinary.com/de2x8dwvf/image/upload/v1695227531/test_y38vvw.webp",
    assignees: TASK.assignees,
    comments: TASK.comments,
    files: TASK.files,
  },
};
