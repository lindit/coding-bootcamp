/**
 * Calculates the tip amount based on the quality of service provided.
 * Good service = 20% tip
 * Regular service = 10% tip
 * Bad service = 0% tip
 * @example calculateTip(100, "good") // returns 20
 * @example calculateTip(100, "regular") // returns 10
 * @example calculateTip(100, "bad") // returns 0
 * @param {number} amount - The cost of the meal.
 * @param {"good" | "regular" | "bad"} qualityOfService - The quality of service provided.
 * @returns {number} The calculated tip amount.
 */
type TQualityOfService = "good" | "regular" | "bad";

function calculateTip(amount: number, qualityOfService: TQualityOfService) {
  if (qualityOfService == "good"){
    return amount * 0.2;
  }
  else if (qualityOfService == "regular"){
    return amount * 0.1;
  }
  else {
    return 0;
  }
}

/**
 * Calculates the total bill amount based on the quality of service provided.
 * HINT: SHOULD USE calculateTip function
 * @example calculateTotalBill(100, "good") // returns 120
 * @example calculateTotalBill(100, "regular") // returns 110
 * @example calculateTotalBill(100, "bad") // returns 100
 * @param {number} amount - The cost of the meal.
 * @param {"good" | "regular" | "bad"} qualityOfService - The quality of service provided.
 * @returns {number} The calculated total bill amount.
 */
function calculateTotalBill(
  amount: number,
  qualityOfService: TQualityOfService
) {
  const tip = calculateTip(amount, qualityOfService);
  return amount + tip;
}
calculateTotalBill(20, "good");

//####################################################################

interface IItem {
  name: string;
  quantity: number;
  price: number;
}

const exampleItems: IItem[] = [
  { name: "Burger", quantity: 2, price: 5 },
  { name: "Fries", quantity: 1, price: 3 },
  { name: "Drink", quantity: 1, price: 2 },
];

/**
 * loop through all items calculate the sum by price * quantity
 * after you have the total sum add a tip by using calculateTotalBill
 * with a GOOD Service
 * @example orderAndBuy(exampleItems) // returns 18 (2 * 5 + 1 * 3 + 1 * 2 = 16 + 2 = 18)
 * @returns {number} The calculated total bill amount.
 * */
function orderAndBuy(items: IItem[]) {
  let sum = 0
  for (let item of items){
    sum = sum + item.quantity * item.price;
  }
  calculateTotalBill(sum, "good");
  sum = sum + calculateTip(sum, "good");
  return sum
}

export { calculateTip, calculateTotalBill, orderAndBuy, IItem };
