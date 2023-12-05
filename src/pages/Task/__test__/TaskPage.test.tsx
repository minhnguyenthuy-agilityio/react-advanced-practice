import { useParams } from "react-router-dom";

import { render } from "@/helpers";

import { TaskPage } from "@/pages";

import { PROJECTS } from "@/mocks";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

describe("Task Page", () => {
  it("matchs snapshoot", () => {
    (useParams as jest.Mock).mockReturnValue({
      projectId: PROJECTS[1].projectId,
    });
    const element = render(<TaskPage />);
    expect(element).toMatchSnapshot();
  });

  it("renders heading with default project name", () => {
    (useParams as jest.Mock).mockReturnValue({
      projectId: PROJECTS[1].projectId,
    });

    const element = render(<TaskPage />);
    const defaultProjectName = PROJECTS[1].name;
    const projectNameElement = element.getByRole("heading", {
      name: defaultProjectName,
      level: 2,
    });

    expect(projectNameElement).toBeInTheDocument();
  });

  it("renders heading based on base URL parameter", () => {
    (useParams as jest.Mock).mockReturnValue({
      projectId: PROJECTS[0].projectId,
    });
    const projectName = PROJECTS[1].name;
    (useParams as jest.Mock).mockReturnValue({
      projectId: PROJECTS[1].projectId,
    });

    const { getByRole } = render(<TaskPage />);

    const headingElement = getByRole("heading", { name: projectName });
    expect(headingElement).toBeInTheDocument();
  });
});
