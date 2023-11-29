import { PriorityLevel } from "@/constants";

export interface TaskParam {
  name: string;
  createdAt: string;
  priority: PriorityLevel;
  project: string;
  description?: string;
  image?: string;
}

export interface Task extends TaskParam {
  id: string;
}

export interface TaskInformation
  extends Omit<TaskParam, "createdAt" | "project"> {}

export interface Assignee {
  name: string;
  avatar: string;
}
