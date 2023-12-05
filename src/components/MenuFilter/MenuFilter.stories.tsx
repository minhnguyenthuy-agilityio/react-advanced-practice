import type { Meta } from "@storybook/react";

import { MenuFilter } from "@/components";

import { OPTIONSFILTER } from "@/constants";

const meta = {
  title: "Components/MenuFilter",
  component: MenuFilter,
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;

export const MenuFilterComponent = {
  args: {
    options: OPTIONSFILTER,
  },
};
