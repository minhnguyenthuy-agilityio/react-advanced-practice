import type { Meta } from "@storybook/react";

import { TaskCard } from "@/components";

import { TASK } from "@/mocks";

import { Priority } from "@/constants";

const meta = {
  title: "Components/TaskCard",
  component: TaskCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;

export const TaskCardComponent = {
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
