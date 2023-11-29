import type { Meta } from "@storybook/react";
import { Heading } from "@chakra-ui/react";

const meta = {
  title: "Example/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Heading>;

export default meta;

export const Primary = {
  args: {
    children: "Heading",
  },
};

export const Small = {
  args: {
    children: "Heading",
    size: "sm",
  },
};

export const Medium = {
  args: {
    children: "Heading",
    size: "md",
  },
};

export const Large = {
  args: {
    children: "Heading",
    size: "lg",
  },
};

export const ExtraLarge = {
  args: {
    children: "Heading",
    size: "xl",
  },
};
