import { orderAndBuy, calculateTip, calculateTotalBill, IItem } from "./base";

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

  it("should calculate total bill", function () {
    const items: IItem[] = [
      { name: "Burger", quantity: 2, price: 5 },
      { name: "Fries", quantity: 1, price: 3 },
      { name: "Drink", quantity: 1, price: 2 },
    ];
    expect(orderAndBuy(items)).toBe(18);
    expect(orderAndBuy([])).toBe(0);
  });
});
