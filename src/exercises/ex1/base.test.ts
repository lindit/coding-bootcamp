import { calcDigits, calculateTip, calculateTotalBill } from "./base";

describe("test exercise 1", () => {
  it("should calculate tip", function () {
    expect(calculateTip(100, "good")).toBe(20);
    expect(calculateTip(100, "regular")).toBe(10);
    expect(calculateTip(100, "bad")).toBe(0);
  });

  it("should calculate the total bill", function () {
    expect(calculateTotalBill(100, "good")).toBe(120);
    expect(calculateTotalBill(100, "regular")).toBe(110);
    expect(calculateTotalBill(100, "bad")).toBe(100);
  });

  it("should calculate number of digits", function () {
    expect(calcDigits(123)).toBe(3);
    expect(calcDigits(1234)).toBe(4);
    expect(calcDigits(12345)).toBe(5);
  });
});
