import type { Meta } from "@storybook/react";

import { Header } from "@/components";

const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;

export const HeaderComponent = {};
