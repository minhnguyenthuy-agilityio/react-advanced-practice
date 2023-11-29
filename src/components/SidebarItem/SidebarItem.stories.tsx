import type { Meta } from "@storybook/react";

import { SidebarItem } from "@/components";

const meta = {
  title: "Components/SidebarItem",
  component: SidebarItem,
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;

export const SidebarItemComponent = {
  args: {
    projectName: "Mobile App",
    dotColor: "success.200",
  },
};
