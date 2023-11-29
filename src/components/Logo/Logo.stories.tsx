import type { Meta } from "@storybook/react";

import { Logo } from "@/components";

const meta = {
  title: "Components/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;

export const LogoComponent = {};
