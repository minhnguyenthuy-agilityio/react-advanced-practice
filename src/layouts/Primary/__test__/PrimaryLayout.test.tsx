import { render } from "@/helpers";

import { PrimaryLayout } from "@/layouts";

describe("Primary Layout", () => {
  it("matchs snapshoot", () => {
    const element = render(<PrimaryLayout />);
    expect(element).toMatchSnapshot();
  });
});
