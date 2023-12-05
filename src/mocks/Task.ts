import { Task } from "@/interfaces";

import { Priority, Status } from "@/constants";

import { Assignee1, Assignee2, Assignee3 } from "@/assets/images";

export const TASK: Pick<Task, "assignees" | "comments" | "files"> = {
  assignees: [
    { name: "Rose", avatar: Assignee1 },
    { name: "Lisa", avatar: Assignee2 },
    { name: "Jennie", avatar: Assignee3 },
  ],
  comments: 20,
  files: 15,
};

export const MOCK_TASK_LIST_TODO: Task[] = [
  {
    id: "1",
    createdAt: "2023-11-28T08:43:51.453Z",
    projectId: "pro00",
    name: "Sample Task",
    priority: Priority.High,
    description: "Sample description for the task",
    image:
      "https://res.cloudinary.com/de2x8dwvf/image/upload/v1695227531/test_y38vvw.webp",
    assignees: TASK.assignees,
    files: TASK.files,
    comments: TASK.comments,
    status: Status.Todo,
  },
  {
    id: "2",
    createdAt: "2023-11-28T08:43:51.453Z",
    projectId: "pro00",
    name: "Sample Task",
    priority: Priority.High,
    description: "Sample description for the task",
    image:
      "https://res.cloudinary.com/de2x8dwvf/image/upload/v1695227531/test_y38vvw.webp",
    assignees: TASK.assignees,
    files: TASK.files,
    comments: TASK.comments,
    status: Status.Todo,
  },
  {
    id: "3",
    createdAt: "2023-11-28T08:43:51.453Z",
    projectId: "pro00",
    name: "Sample Task",
    priority: Priority.High,
    description: "Sample description for the task",
    image:
      "https://res.cloudinary.com/de2x8dwvf/image/upload/v1695227531/test_y38vvw.webp",
    assignees: TASK.assignees,
    files: TASK.files,
    comments: TASK.comments,
    status: Status.Todo,
  },
  {
    id: "4",
    createdAt: "2023-11-28T08:43:51.453Z",
    projectId: "pro00",
    name: "Sample Task",
    priority: Priority.High,
    description: "Sample description for the task",
    image:
      "https://res.cloudinary.com/de2x8dwvf/image/upload/v1695227531/test_y38vvw.webp",
    assignees: TASK.assignees,
    files: TASK.files,
    comments: TASK.comments,
    status: Status.Todo,
  },
  {
    id: "5",
    createdAt: "2023-11-28T08:43:51.453Z",
    projectId: "pro00",
    name: "Sample Task",
    priority: Priority.High,
    description: "Sample description for the task",
    image:
      "https://res.cloudinary.com/de2x8dwvf/image/upload/v1695227531/test_y38vvw.webp",
    assignees: TASK.assignees,
    files: TASK.files,
    comments: TASK.comments,
    status: Status.Todo,
  },
];

export const MOCK_TASK_LIST_ONPROGRESS: Task[] = [
  {
    id: "6",
    createdAt: "2023-11-28T08:43:51.453Z",
    projectId: "pro00",
    name: "Sample Task",
    priority: Priority.High,
    description: "Sample description for the task",
    image:
      "https://res.cloudinary.com/de2x8dwvf/image/upload/v1695227531/test_y38vvw.webp",
    assignees: TASK.assignees,
    files: TASK.files,
    comments: TASK.comments,
    status: Status.Onprogress,
  },
  {
    id: "7",
    createdAt: "2023-11-28T08:43:51.453Z",
    projectId: "pro00",
    name: "Sample Task",
    priority: Priority.High,
    description: "Sample description for the task",
    image:
      "https://res.cloudinary.com/de2x8dwvf/image/upload/v1695227531/test_y38vvw.webp",
    assignees: TASK.assignees,
    files: TASK.files,
    comments: TASK.comments,
    status: Status.Onprogress,
  },
  {
    id: "8",
    createdAt: "2023-11-28T08:43:51.453Z",
    projectId: "pro00",
    name: "Sample Task",
    priority: Priority.High,
    description: "Sample description for the task",
    image:
      "https://res.cloudinary.com/de2x8dwvf/image/upload/v1695227531/test_y38vvw.webp",
    assignees: TASK.assignees,
    files: TASK.files,
    comments: TASK.comments,
    status: Status.Onprogress,
  },
  {
    id: "9",
    createdAt: "2023-11-28T08:43:51.453Z",
    projectId: "pro00",
    name: "Sample Task",
    priority: Priority.High,
    description: "Sample description for the task",
    image:
      "https://res.cloudinary.com/de2x8dwvf/image/upload/v1695227531/test_y38vvw.webp",
    assignees: TASK.assignees,
    files: TASK.files,
    comments: TASK.comments,
    status: Status.Onprogress,
  },
  {
    id: "10",
    createdAt: "2023-11-28T08:43:51.453Z",
    projectId: "pro00",
    name: "Sample Task",
    priority: Priority.High,
    description: "Sample description for the task",
    image:
      "https://res.cloudinary.com/de2x8dwvf/image/upload/v1695227531/test_y38vvw.webp",
    assignees: TASK.assignees,
    files: TASK.files,
    comments: TASK.comments,
    status: Status.Onprogress,
  },
  {
    id: "11",
    createdAt: "2023-11-28T08:43:51.453Z",
    projectId: "pro00",
    name: "Sample Task",
    priority: Priority.High,
    description: "Sample description for the task",
    image:
      "https://res.cloudinary.com/de2x8dwvf/image/upload/v1695227531/test_y38vvw.webp",
    assignees: TASK.assignees,
    files: TASK.files,
    comments: TASK.comments,
    status: Status.Onprogress,
  },
];

export const MOCK_TASK_LIST_DONE: Task[] = [
  {
    id: "12",
    createdAt: "2023-11-28T08:43:51.453Z",
    projectId: "pro00",
    name: "Sample Task",
    priority: Priority.High,
    description: "Sample description for the task",
    image:
      "https://res.cloudinary.com/de2x8dwvf/image/upload/v1695227531/test_y38vvw.webp",
    assignees: TASK.assignees,
    files: TASK.files,
    comments: TASK.comments,
    status: Status.Done,
  },
  {
    id: "13",
    createdAt: "2023-11-28T08:43:51.453Z",
    projectId: "pro00",
    name: "Sample Task",
    priority: Priority.High,
    description: "Sample description for the task",
    image:
      "https://res.cloudinary.com/de2x8dwvf/image/upload/v1695227531/test_y38vvw.webp",
    assignees: TASK.assignees,
    files: TASK.files,
    comments: TASK.comments,
    status: Status.Done,
  },
  {
    id: "14",
    createdAt: "2023-11-28T08:43:51.453Z",
    projectId: "pro00",
    name: "Sample Task",
    priority: Priority.High,
    description: "Sample description for the task",
    image:
      "https://res.cloudinary.com/de2x8dwvf/image/upload/v1695227531/test_y38vvw.webp",
    assignees: TASK.assignees,
    files: TASK.files,
    comments: TASK.comments,
    status: Status.Done,
  },
  {
    id: "15",
    createdAt: "2023-11-28T08:43:51.453Z",
    projectId: "pro00",
    name: "Sample Task",
    priority: Priority.High,
    description: "Sample description for the task",
    image:
      "https://res.cloudinary.com/de2x8dwvf/image/upload/v1695227531/test_y38vvw.webp",
    assignees: TASK.assignees,
    files: TASK.files,
    comments: TASK.comments,
    status: Status.Done,
  },
];
