import { render } from "@/helpers";

import { Header } from "@/components";

describe("Header component", () => {
  it("matchs snapshoot", () => {
    const element = render(<Header />);
    expect(element).toMatchSnapshot();
  });
});
