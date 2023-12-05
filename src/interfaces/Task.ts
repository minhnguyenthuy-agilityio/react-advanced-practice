import { Priority, Status } from "@/constants";

export interface TaskParam {
  name: string;
  createdAt: string;
  priority: Priority;
  projectId: string;
  status: Status;
  description?: string;
  image?: string;
}

export interface Task extends TaskParam {
  id: string;
  assignees: { name: string; avatar: string }[];
  files: number;
  comments: number;
}

// export interface TaskInformation extends Omit<Task, "projectId"> {}
