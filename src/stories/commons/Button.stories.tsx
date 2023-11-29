import type { Meta } from "@storybook/react";
import { Button } from "@chakra-ui/react";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

export const Primary = {
  args: {
    children: "Button",
  },
};

export const Outline = {
  args: {
    children: "Button",
    variant: "outline",
  },
};

export const ExtraSmall = {
  args: {
    children: "Button",
    size: "xs",
  },
};

export const Small = {
  args: {
    children: "Button",
    size: "sm",
  },
};

export const Large = {
  args: {
    children: "Button",
    size: "lg",
  },
};
