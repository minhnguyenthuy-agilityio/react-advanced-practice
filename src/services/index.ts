import { axiosInstance } from "./configInstance";

import { API_PATH_URL } from "@/constants";

import { TaskParam, Task } from "@/interfaces";

import { TASK } from "@/mocks";

/**
 * Fetch api tasks
 * @param keyword - Key search task
 *
 * @returns {Promise< Task[] | null >} - Task array
 */
export const getTaskList = async (projectId?: string): Promise<Task[]> => {
  const res = await axiosInstance.get<Task[]>(API_PATH_URL.TASKS_URL, {
    params: {
      projectId: projectId,
      sortBy: "createdAt",
      order: "asc",
    },
  });

  const newData = res.data.map((task) => {
    return {
      ...task,
      assignees: TASK.assignees,
      files: TASK.files,
      comments: TASK.comments,
    };
  });

  return newData || [];
};

/**
 * Add new task
 * @param {taskId}  - Task's information
 *
 * @returns {Promise<{ data: Task | null }>} - Task object and error message
 */
export const addTask = async (
  data: TaskParam,
): Promise<{ data: TaskParam | null }> => {
  const res = await axiosInstance.post<TaskParam>(API_PATH_URL.TASKS_URL, data);

  return { data: res.data || [] };
};

/**
 * Delete task
 * @param {string} id - id of task
 *
 * @returns {Promise<{ data: Task | null }>} - Task object and error message
 */
export const deleteTask = async (
  taskId: string,
): Promise<{ data: TaskParam | null }> => {
  const res = await axiosInstance.delete<TaskParam>(
    `${API_PATH_URL.TASKS_URL}/${taskId}`,
  );

  return { data: res.data || [] };
};

/**
 * Update task
 * @param {number} taskId - Id of task
 * @param {object} data - Data of task
 *
 * @returns {Promise<{ data: TaskParam | null }>} - Task object and error message
 */
export const updateTask = async (
  taskId: string,
  data: TaskParam,
): Promise<{ data: TaskParam | null }> => {
  const res = await axiosInstance.put<TaskParam>(
    `${API_PATH_URL.TASKS_URL}/${taskId}`,
    data,
  );

  return { data: res.data || [] };
};
