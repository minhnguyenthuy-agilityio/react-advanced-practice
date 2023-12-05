import { act, fireEvent, render, renderHook } from "@/helpers";

import { SearchBox } from "@/components";

import { useTaskListStore } from "@/hooks";

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

  it("should update input value on change", () => {
    const { getByPlaceholderText } = render(<SearchBox />);
    const input = getByPlaceholderText("Search for anything...");

    fireEvent.change(input, { target: { value: "New Value" } });

    expect(input).toHaveValue("New Value");
  });

  it("should call setKeyword on Enter key press", () => {
    const { getByPlaceholderText } = render(<SearchBox />);
    const input = getByPlaceholderText("Search for anything...");
    const { result } = renderHook(() => useTaskListStore());

    fireEvent.change(input, { target: { value: "keyword" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    act(() => {
      result.current.setKeyword("Test Keyword");
    });

    expect(result.current.keyword).toBe("Test Keyword");
  });
});
