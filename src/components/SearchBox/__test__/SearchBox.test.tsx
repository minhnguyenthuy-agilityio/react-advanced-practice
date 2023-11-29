import { render } from "@/helpers";

import { SearchBox } from "@/components";

describe("SearchBox component", () => {
  it("renders input element with correct placeholder", () => {
    const { getByPlaceholderText } = render(<SearchBox />);
    const inputElement = getByPlaceholderText("Search for anything...");
    expect(inputElement).toBeInTheDocument();
  });

  it("matchs snapshoot", () => {
    const element = render(<SearchBox />);
    expect(element).toMatchSnapshot();
  });
});
