import { render } from "@/helpers";

import { SidebarItem } from "@/components";

import { PROJECTS } from "@/mocks";

describe("SidebarItem component", () => {
  it("matchs snapshoot", () => {
    PROJECTS.map(({ iconColor, name, projectId }, index) => {
      const element = render(
        <SidebarItem
          key={`${name}-${index}`}
          iconColor={iconColor}
          title={name.toUpperCase()}
          projectId={projectId}
        />,
      );
      expect(element).toMatchSnapshot();
    });
  });
});
