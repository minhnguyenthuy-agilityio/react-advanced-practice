import { render } from "@/helpers";

import { SideBar } from "@/components";

describe("SideBar component", () => {
  it("matchs snapshoot", () => {
    const element = render(<SideBar />);
    expect(element).toMatchSnapshot();
  });
});
