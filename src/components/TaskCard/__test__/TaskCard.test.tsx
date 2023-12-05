import { fireEvent, render } from "@/helpers";

import { TaskCard } from "@/components";

import { TASK } from "@/mocks";

import { Gallery } from "@/assets/images";

import { PRIORITY_MAPPING, Priority, Status } from "@/constants";

describe("TaskCard component", () => {
  const taskInformation = {
    id: "1",
    createdAt: "",
    name: "Sample Task",
    priority: Priority.High,
    description: "Sample description for the task",
    image:
      "https://res.cloudinary.com/de2x8dwvf/image/upload/v1695227531/test_y38vvw.webp",
    assignees: TASK.assignees,
    files: TASK.files,
    comments: TASK.comments,
    status: 0,
    projectId: "pro00",
  };

  it("renders TaskCard component with correct information", () => {
    const { getByText } = render(<TaskCard {...taskInformation} />);

    expect(getByText(taskInformation.name)).toBeInTheDocument();
    expect(getByText(taskInformation.description)).toBeInTheDocument();

    expect(getByText("20 comments")).toBeInTheDocument();
    expect(getByText("15 files")).toBeInTheDocument();
  });

  it("matchs snapshoot", () => {
    const element = render(<TaskCard {...taskInformation} />);
    expect(element).toMatchSnapshot();
  });

  it("renders TaskCard with image when image is provided", () => {
    const { getByAltText } = render(<TaskCard {...taskInformation} />);

    const imageElement = getByAltText("background task");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", taskInformation.image);
  });

  it("renders TaskCard with default image when image is not provided", () => {
    const taskInformationNoImage = {
      ...taskInformation,
      image: "",
    };
    const { getByAltText } = render(<TaskCard {...taskInformationNoImage} />);

    const defaultImageElement = getByAltText("background task");
    expect(defaultImageElement).toBeInTheDocument();
    expect(defaultImageElement).toHaveAttribute("src", Gallery);
  });

  it("opens Task Detail modal when clicking the card", () => {
    const element = render(<TaskCard {...taskInformation} />);

    const taskCard = element.getByTestId("task-01");

    fireEvent.click(taskCard);

    const taskDetailModal = element.getByRole("heading", {
      name: taskInformation.name,
      level: 3,
    });
    expect(taskDetailModal).toBeInTheDocument();
  });

  it("renders correct comment and file count", () => {
    const countManyTask = {
      ...taskInformation,
      comments: 15,
      files: 15,
    };

    const countLessTask = {
      ...taskInformation,
      comments: 1,
      files: 1,
    };

    const countManyElement = render(<TaskCard {...countManyTask} />);
    const countLessElement = render(<TaskCard {...countLessTask} />);

    const commentsText = countManyElement.getByText(
      `${countManyTask.comments} comments`,
    );
    expect(commentsText).toBeInTheDocument();

    const commentText = countLessElement.getByText(
      `${countLessTask.comments} comment`,
    );
    expect(commentText).toBeInTheDocument();

    const filesText = countManyElement.getByText(
      `${countManyTask.files} files`,
    );
    expect(filesText).toBeInTheDocument();

    const fileText = countLessElement.getByText(`${countLessTask.files} file`);
    expect(fileText).toBeInTheDocument();
  });

  it("should render description text", () => {
    const { getByText } = render(<TaskCard {...taskInformation} />);

    const descriptionText = getByText(
      taskInformation.description || "No description provided",
    );

    expect(descriptionText).toBeInTheDocument();

    expect(descriptionText).toHaveStyle(
      `color: ${taskInformation.description ? "secondary.400" : "primary.500"}`,
    );
  });

  it("should render badge with correct properties based on status", () => {
    const { getByText } = render(<TaskCard {...taskInformation} />);
    const { color, bgColor, label } =
      PRIORITY_MAPPING[taskInformation.priority];
    const badge = getByText(
      taskInformation.status === Status.Done ? "Completed" : label,
    );

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveStyle(
      `color: ${
        taskInformation.status === Status.Done ? "success.400" : color
      }`,
    );
    expect(badge).toHaveStyle(
      `background-color: ${
        taskInformation.status === Status.Done ? "success.300" : bgColor
      }`,
    );
  });
});
