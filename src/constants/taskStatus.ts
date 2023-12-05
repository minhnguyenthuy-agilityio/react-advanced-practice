import { TaskStatus } from "@/interfaces";

export enum Status {
  Todo,
  Onprogress,
  Done,
}

export const TASK_STATUS: TaskStatus[] = [
  { status: Status.Todo, label: "To Do", colorStatus: "secondary.300" },
  {
    status: Status.Onprogress,
    label: "On Progress",
    colorStatus: "tertiary.300",
  },
  { status: Status.Done, label: "Done", colorStatus: "success.100" },
];
