import { REGEXP } from "@/constants";

export const isValidImageUrl = (value: string | undefined) => {
  return !value || REGEXP.IMAGE.test(value);
};
