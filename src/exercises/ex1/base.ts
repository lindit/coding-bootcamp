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
  //TODO: your code here
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
  //TODO: Call calculateTip and add the result to the amount
}

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
 * @egs orderAndBuy(exampleItems) // returns 20
 * @returns {number} The calculated total bill amount.
 * */
function orderAndBuy(items: IItem[]) {}

export { calculateTip, calculateTotalBill, orderAndBuy, IItem };
