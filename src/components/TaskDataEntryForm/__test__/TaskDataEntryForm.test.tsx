import { act, fireEvent, render, waitFor } from "@/helpers";

import { TaskDataEntryForm } from "@/components";

describe("TaskDataEntryForm component", () => {
  it("matchs snapshoot", () => {
    const element = render(
      <TaskDataEntryForm isOpenForm={true} handleClose={() => {}} />,
    );
    expect(element).toMatchSnapshot();
  });

  it("Validation for image URL", async () => {
    const { getByPlaceholderText, getByText } = render(
      <TaskDataEntryForm isOpenForm={true} handleClose={() => {}} />,
    );

    const imageInput = getByPlaceholderText("http://");
    const buttonSubmit = getByText("Submit");

    fireEvent.change(imageInput, {
      target: { value: "invalid" },
    });
    expect(imageInput).toHaveValue("invalid");

    act(() => {
      fireEvent.submit(buttonSubmit);
    });
    waitFor(() => {
      expect(getByText("Please enter a valid URL")).toBeInTheDocument();
    });
  });

  it("Validate required fields", async () => {
    const { queryByText, getByText } = render(
      <TaskDataEntryForm isOpenForm={true} handleClose={() => {}} />,
    );

    expect(queryByText("Name is required")).not.toBeInTheDocument();
    expect(queryByText("Please select priority")).not.toBeInTheDocument();

    act(() => {
      fireEvent.click(getByText("Submit"));
    });
    waitFor(() => {
      expect(getByText("Name is required")).toBeInTheDocument();
      expect(getByText("Please select priority")).toBeInTheDocument();
    });
  });

  it("renders form successfully", () => {
    const { getByText } = render(
      <TaskDataEntryForm isOpenForm={true} handleClose={() => {}} />,
    );

    expect(getByText("Task Name")).toBeInTheDocument();
    expect(getByText("Description")).toBeInTheDocument();
    expect(getByText("Priority")).toBeInTheDocument();
    expect(getByText("Image")).toBeInTheDocument();
  });

  it("should reset form when called", () => {
    const handleClose = jest.fn();
    const { getByLabelText } = render(
      <TaskDataEntryForm isOpenForm={true} handleClose={handleClose} />,
    );

    fireEvent.change(getByLabelText("Task Name"), {
      target: { value: "New Task" },
    });
    fireEvent.change(getByLabelText("Description"), {
      target: { value: "Task description" },
    });
    fireEvent.change(getByLabelText("Priority"), { target: { value: "High" } });
    fireEvent.change(getByLabelText("Image"), {
      target: { value: "https://example.com/image.jpg" },
    });

    fireEvent.click(getByLabelText("Close"));

    expect(getByLabelText("Task Name")).toHaveValue("");
    expect(getByLabelText("Description")).toHaveValue("");

    expect(handleClose).toHaveBeenCalled();
  });
});
