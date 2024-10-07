import { checkArraysInput } from './helperFunctions.js'
/**
 * @class MeanValueCalculations
 *
 * This class contains private and public methods related to making mean value calculations.
 */
export class MeanValueCalculations {
  /**
   * The private method #sumNumbersInArray sums all numbers from an array and is used in method meanValue to   calculate the mean value from said array.
   */
  #sumNumbersInArray (numbers) {
    let totalSum = 0
    for (let i = 0; i < numbers.length; i++) {
      totalSum += numbers[i]
    }
    return totalSum
  }

  /**
   * Calculates the man value from an array of numbers. Uses the private method #checkArraysInput for validation and the private method #sumNumbersInArray to sum all numbers in the array.
   */
  calculateMeanValue (numbers) {
    checkArraysInput(numbers)
    const totalSum = this.#sumNumbersInArray(numbers)
    return totalSum / numbers.length
  }

  /**
   * The private method #multiplyNumbersInArray multiplies all numbers in an array and is used in calculateGeometricMeanValue method.
   */
  #multiplyNumbersInArray (numbers) {
    let totalProduct = 1
    for (let i = 0; i < numbers.length; i++) {
      totalProduct *= numbers[i]
    }
    return totalProduct
  }

  /**
   * Calculates the geometric mean value from an array of numbers. Uses the private method #checkArraysInput for validation and the private method #multiplyNumbersInArray to multiply all numbers in the array.
   */
  calculateGeometricMeanValue (numbers) {
    checkArraysInput(numbers)
    const totalProduct = this.#multiplyNumbersInArray(numbers)
    return Math.pow(totalProduct, 1 / numbers.length)
  }

  /**
   * Sums all reciprocals of all numbers in an array. Is used in calculateHarmonicMeanValue method.
   */
  #sumReciprocalsInArray (numbers) {
    let totalSumOfReciprocals = 0
    for (let i = 0; i < numbers.length; i++) {
      totalSumOfReciprocals += 1 / numbers[i]
    }
    return totalSumOfReciprocals
  }

  /**
   * Calculates the harmonic mean value from an array of numbers. Uses the private method checkArraysInput for validation and the private method #sumReciprocalsInArray to sum all reciprocals in the array.
   */
  calculateHarmonicMeanValue (numbers) {
    checkArraysInput(numbers)
    const sumOfReciprocals = this.#sumReciprocalsInArray(numbers)
    return numbers.length / sumOfReciprocals
  }
}
