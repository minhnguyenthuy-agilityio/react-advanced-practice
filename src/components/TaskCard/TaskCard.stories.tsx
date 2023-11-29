import type { Meta } from "@storybook/react";

import { TaskCard } from "@/components";

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
    priority: "low",
    description:
      "Brainstorming brings team members' diverse experience into play.",
    image:
      "https://res.cloudinary.com/de2x8dwvf/image/upload/v1695227531/test_y38vvw.webp",
  },
};
