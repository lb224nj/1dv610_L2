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
   * helper function checkArraysInput for validation, the private method #calculateTotalSquaredDifference to
   * calculate the total squared difference, and the calculateMeanValue method from the MeanValueCalculations class
   * to get the mean value of the array.
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
   */
  calculateStandardDeviationValue (numbers) {
    return Math.sqrt(this.calculateVarianceValue(numbers))
  }
}
