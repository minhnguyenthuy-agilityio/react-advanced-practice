import { TaskStatus } from "@/interfaces";

export const STATUS = {
  TODO: "todo",
  ONPROGRESS: "onProgress",
  DONE: "done",
};

export const TASK_STATUS: TaskStatus[] = [
  { status: STATUS.TODO, label: "to do", colorStatus: "secondary.300" },
  {
    status: STATUS.ONPROGRESS,
    label: "on progress",
    colorStatus: "tertiary.300",
  },
  { status: STATUS.DONE, label: "done", colorStatus: "secondary.300" },
];
