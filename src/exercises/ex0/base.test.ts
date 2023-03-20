import { sum } from "./base.js";

describe("test exercise 0", () => {
  it("should sum", function () {
    expect(sum([1, 2])).toBe(3);
    expect(sum([])).toBe(0);
    expect(sum([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(45);
  });
});
