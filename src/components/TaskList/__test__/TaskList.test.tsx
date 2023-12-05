import { render } from "@/helpers";

import { TaskList } from "@/components";

import { MOCK_TASK_LIST_DONE } from "@/mocks";

import { Status } from "@/constants";

describe("TaskList component", () => {
  it("matchs snapshoot", () => {
    const element = render(
      <TaskList status={Status.Todo} tasks={MOCK_TASK_LIST_DONE} />,
    );

    expect(element).toMatchSnapshot();
  });

  it("renders TaskList with correct heading", () => {
    const { getByTestId, getAllByRole } = render(
      <TaskList status={Status.Todo} tasks={MOCK_TASK_LIST_DONE} />,
    );

    const columnName = getByTestId("column-name");
    expect(columnName).toBeInTheDocument();

    const tasks = getAllByRole("article");
    expect(tasks).toHaveLength(MOCK_TASK_LIST_DONE.length);
  });

  it("renders TaskList component without tasks", () => {
    const { queryByRole, getByTestId } = render(
      <TaskList status={Status.Todo} tasks={[]} />,
    );

    const columnName = getByTestId("column-name");
    expect(columnName).toBeInTheDocument();

    // Check if no TaskCard component is rendered when there are no tasks
    const taskCards = queryByRole("article");
    expect(taskCards).toBeNull();
  });
});
