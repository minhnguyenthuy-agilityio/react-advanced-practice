import { Assignee } from "@/interfaces";

import Assignee1 from "@/assets/images/assignee1.png";
import Assignee2 from "@/assets/images/assignee2.png";
import Assignee3 from "@/assets/images/assignee3.png";

interface Task {
  assignees: Assignee[];
  comments: number;
  files: number;
}

export const TASK: Task = {
  assignees: [
    { name: "Rose", avatar: Assignee1 },
    { name: "Lisa", avatar: Assignee2 },
    { name: "Jennie", avatar: Assignee3 },
  ],
  comments: 20,
  files: 15,
};
