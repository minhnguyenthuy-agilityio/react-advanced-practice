import { render } from "@/helpers";

import { Logo } from "@/components";

describe("Logo component", () => {
  it("matchs snapshoot", () => {
    const element = render(<Logo />);
    expect(element).toMatchSnapshot();
  });
});
