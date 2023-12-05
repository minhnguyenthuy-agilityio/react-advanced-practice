import { render } from "@/helpers";
import { Page } from "@/pages";

describe("Main Page", () => {
  it("matchs snapshoot", () => {
    const element = render(<Page />);
    expect(element).toMatchSnapshot();
  });
});
