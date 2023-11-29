import { render } from "@/helpers";

import { TaskCard } from "@/components";

import { TASK } from "@/mocks";

import { PriorityLevel } from "@/constants";

import Gallery from "@/assets/images/gallery.png";

describe("TaskCardItem component", () => {
  const taskInformation = {
    name: "Sample Task",
    priority: PriorityLevel.Completed,
    description: "Sample description for the task",
    image:
      "https://res.cloudinary.com/de2x8dwvf/image/upload/v1695227531/test_y38vvw.webp",
    assignees: TASK.assignees,
    files: TASK.files,
    comments: TASK.comments,
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
});
