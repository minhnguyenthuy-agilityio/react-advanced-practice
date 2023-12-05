import { isValidImageUrl } from "@/helpers";

describe("isValidImageUrl", () => {
  it("should return true for valid image URLs", () => {
    expect(isValidImageUrl("https://test.com/image.jpg")).toBe(true);
  });

  it("should return false for invalid image URLs", () => {
    expect(isValidImageUrl("notAnUrl")).toBe(false);
  });

  it("should return true for undefined or empty value", () => {
    expect(isValidImageUrl(undefined)).toBe(true);
    expect(isValidImageUrl("")).toBe(true);
  });
});
