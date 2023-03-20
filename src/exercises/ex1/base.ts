/**
 * Calculates the tip amount based on the quality of service provided.
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

/**
 * Calculates the number of digits in a number.
 * @example calcDigits(123) // returns 3
 * @example calcDigits(1234) // returns 4
 * @example calcDigits(12345) // returns 5
 * @param {number} num - The number to calculate the digits for.
 * @returns {number} The number of digits in the number.
 */
function calcDigits(num: number) {
  //TODO: your code here AND DON'T USE .toString().length!!!
}

export { calculateTip, calculateTotalBill, calcDigits };
