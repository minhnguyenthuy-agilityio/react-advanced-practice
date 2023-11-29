import type { Meta } from "@storybook/react";
import { Input } from "@chakra-ui/react";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

export const Primary = {
  args: {
    placeholder: "Input",
  },
};

export const ExtraSmall = {
  args: {
    placeholder: "Input",
    size: "xs",
  },
};

export const Small = {
  args: {
    placeholder: "Input",
    size: "sm",
  },
};

export const Medium = {
  args: {
    placeholder: "Input",
    size: "md",
  },
};
