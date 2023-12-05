import { act, renderHook, waitFor, wrapper } from "@/helpers";

import { useTaskList, useTaskListStore } from "@/hooks";

import { MOCK_TASK_LIST_TODO } from "@/mocks";

import * as services from "@/services";

describe("Test useTaskList", () => {
  it("initial state of useTaskListStore", () => {
    const { result } = renderHook(() => useTaskListStore());

    expect(result.current.tasks).toEqual([]);
    expect(result.current.keyword).toEqual("");
  });

  it("set tasks value successful", () => {
    const { result } = renderHook(() => useTaskListStore());

    expect(result.current.tasks).toEqual([]);
    act(() => result.current.setTasks(MOCK_TASK_LIST_TODO));
    expect(result.current.tasks).toEqual(MOCK_TASK_LIST_TODO);
  });

  it("set keyword value successful", () => {
    const { result } = renderHook(() => useTaskListStore());

    expect(result.current.keyword).toEqual("");
    act(() => result.current.setKeyword("task 13"));
    expect(result.current.keyword).toEqual("task 13");
  });

  it("call useTaskList when get data success", async () => {
    jest.spyOn(services, "getTaskList").mockResolvedValue(MOCK_TASK_LIST_TODO);
    const { result } = renderHook(() => useTaskList(), { wrapper });

    await waitFor(() => {
      expect(result.current.data).toEqual(MOCK_TASK_LIST_TODO);
      expect(result.current.isSuccess).toEqual(true);
    });
  });
});
