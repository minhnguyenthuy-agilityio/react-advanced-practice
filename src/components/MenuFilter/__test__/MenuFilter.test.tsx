import { render } from "@/helpers";

import { MenuFilter } from "@/components";

import { OPTIONSFILTER } from "@/constants";

import { FilterIcon } from "@/assets/icons";

describe("MenuFilter component", () => {
  it("matchs snapshoot", () => {
    const element = render(
      <MenuFilter
        buttonName="Filter"
        icon={FilterIcon}
        options={OPTIONSFILTER}
      />,
    );
    expect(element).toMatchSnapshot();
  });

  it("renders options correctly", () => {
    const { getAllByTestId, getByText } = render(
      <MenuFilter
        buttonName="Filter"
        icon={FilterIcon}
        options={OPTIONSFILTER}
      />,
    );
    const menuItems = getAllByTestId("menu-item");

    expect(menuItems).toHaveLength(OPTIONSFILTER.length);

    OPTIONSFILTER.forEach((option) => {
      const menuItem = getByText(option);
      expect(menuItem).toBeInTheDocument();
    });
  });
});
