import type { Meta } from "@storybook/react";
import { Text } from "@chakra-ui/react";

const meta = {
  title: "Example/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;

export const Primary = {
  args: {
    children: "Text",
  },
};

export const ExtraSmall = {
  args: {
    children: "Text",
    size: "xs",
  },
};

export const Small = {
  args: {
    children: "Text",
    size: "sm",
  },
};

export const Medium = {
  args: {
    children: "Text",
    size: "md",
  },
};

export const Large = {
  args: {
    children: "Text",
    size: "lg",
  },
};

export const ExtraLarge = {
  args: {
    children: "Text",
    size: "xl",
  },
};
