import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";

import { create } from "zustand";

import { Task, TaskParam } from "@/interfaces";

import { addTask, getTaskList, updateTask } from "@/services";

interface TaskListStore {
  tasks: Task[];
  keyword: string;
  setKeyword: (value: string) => void;
  setTasks: (value: Task[]) => void;
}

export const useTaskListStore = create<TaskListStore>((set) => ({
  tasks: [],
  keyword: "",
  setKeyword: (data: string) => set(() => ({ keyword: data })),
  setTasks: (data: Task[]) => set(() => ({ tasks: data })),
}));

export const useTaskList = (projectId?: string): UseQueryResult<Task[]> => {
  const { setTasks } = useTaskListStore();

  return useQuery({
    queryKey: ["tasks", projectId],
    queryFn: () => getTaskList(projectId),
    onSuccess: (data) => setTasks(data),
  });
};

export const useMutationAddTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TaskParam) => addTask(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: "tasks" });
    },
  });
};

export const useMutationUpdateTask = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TaskParam) => updateTask(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: "tasks" });
    },
  });
};
