import { render } from "@/helpers";

import { TaskDetail } from "@/components";

import { TASK } from "@/mocks";

import { Gallery } from "@/assets/images";

import { Priority } from "@/constants";

describe("TaskDetailItem component", () => {
  const taskInformation = {
    isOpenDetail: true,
    onCloseDetail: jest.fn(),
    name: "Sample Task",
    priority: Priority.High,
    description: "Sample description for the task",
    image:
      "https://res.cloudinary.com/de2x8dwvf/image/upload/v1695227531/test_y38vvw.webp",
    assignees: TASK.assignees,
    files: TASK.files,
    comments: TASK.comments,
    status: 0,
  };

  it("matchs snapshoot", () => {
    const element = render(<TaskDetail {...taskInformation} />);
    expect(element).toMatchSnapshot();
  });

  it("renders TaskDetail with correct details", () => {
    const { getByText } = render(<TaskDetail {...taskInformation} />);

    expect(getByText(taskInformation.name)).toBeInTheDocument();
    expect(getByText(taskInformation.description)).toBeInTheDocument();

    expect(getByText("20 comments")).toBeInTheDocument();
    expect(getByText("15 files")).toBeInTheDocument();
  });

  it("renders TaskCard with default image when image is not provided", () => {
    const taskInformationNoImage = {
      ...taskInformation,
      image: "",
    };
    const { getByAltText } = render(<TaskDetail {...taskInformationNoImage} />);

    const defaultImageElement = getByAltText("background task");
    expect(defaultImageElement).toBeInTheDocument();
    expect(defaultImageElement).toHaveAttribute("src", Gallery);
  });
});
