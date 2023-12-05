import { Priority } from "@/constants";

export type PriorityLabel = Record<
  Priority,
  { color: string; bgColor: string; label: string }
>;

export const PRIORITY_MAPPING: PriorityLabel = {
  [Priority.Low]: {
    label: "Low",
    color: "tertiary.200",
    bgColor: "tertiary.100",
  },
  [Priority.High]: {
    label: "High",
    color: "error.200",
    bgColor: "error.100",
  },
};
