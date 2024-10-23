import { MeanValueCalculations } from './meanValueCalculations.js'
import { InputValidator } from '../inputValidator.js'

/**
 * Class used for calculation of the variance value from an array of numbers.
 */
export class VarianceValueCalculations extends InputValidator {
/**
 * Constructs an instance of the VarianceValueCalculations class where MeanValueCalculations class is reused via
 * composition.
 */
  constructor () {
    super()
    this.meanValueCalculator = new MeanValueCalculations()
  }

  /**
   * Private method that calculates the squared difference between a number and the mean value of an array. Used in
   * calculateVarianceValue method.
   *
   * @param {number[]} numbers - The array of numbers to calculate the squared difference from.
   * @param {number} meanValue - The mean value of the array of numbers.
   * @returns {number} - The total squared difference between the numbers and the mean value.
   */
  #calculateTotalSquaredDifference (numbers, meanValue) {
    let totalSquaredDifference = 0
    for (let i = 0; i < numbers.length; i++) {
      const differenceBetweenNumberAndMean = numbers[i] - meanValue
      totalSquaredDifference += differenceBetweenNumberAndMean ** 2
    }
    return totalSquaredDifference / numbers.length
  }

  /**
   * Public method that calculates the variance value from an array of numbers. Uses the
   * validateInput method from parent class InputValidator for validation, the private method #calculateTotalSquaredDifference to calculate the total squared difference, and the calculateMeanValue method from the MeanValueCalculations class to get the mean value of the array.
   *
   * @param {number[]} numbers - The array of numbers to calculate the variance value from.
   * @returns {number} - The calculated variance value from the array.
   */
  calculateVarianceValue (numbers) {
    this.validateInput(numbers)
    // Uses calculateMeanValue method from MeanValueCalculations class
    const meanValue = this.meanValueCalculator.calculateMeanValue(numbers)
    return this.#calculateTotalSquaredDifference(numbers, meanValue)
  }

  /**
   * Public method that calculates the standard deviation value from an array of numbers. Uses the
   * calculateVarianceValue method and returns the square root of the variance value.
   *
   * @param {number[]} numbers - The array of numbers to calculate the standard deviation value from.
   * @returns {number} - The calculated standard deviation value from the array.
   */
  calculateStandardDeviationValue (numbers) {
    return Math.sqrt(this.calculateVarianceValue(numbers))
  }
}
