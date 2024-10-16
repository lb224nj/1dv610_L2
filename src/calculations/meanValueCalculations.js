import { checkArraysInput } from '../helperFunctions.js'
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
   * Calculates the man value from an array of numbers. Uses helper function checkArraysInput for validation and the private method #sumNumbersInArray to sum all numbers in the array.
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
   * Calculates the geometric mean value from an array of numbers. Uses helper function checkArraysInput for validation and the private method #multiplyNumbersInArray to multiply all numbers in the array.
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
   * Calculates the harmonic mean value from an array of numbers. Uses the helper function checkArraysInput for validation and the private method #sumReciprocalsInArray to sum all reciprocals in the array.
   */
  calculateHarmonicMeanValue (numbers) {
    checkArraysInput(numbers)
    const sumOfReciprocals = this.#sumReciprocalsInArray(numbers)
    return numbers.length / sumOfReciprocals
  }

  /**
   * Private method for sorting the array from smallest to largest. Used in calculateTrimmedMeanValue method.
   */
  #sortNumbersInArray (numbers) {
    return numbers.slice().sort((a, b) => a - b)
  }

  /**
   * Private method that calculates how many numbers that should be remvoved from the array based on given percentage.
   * Used in calculateTrimmedMeanValue method.
   */
  #calculateAmountOfNumbersToTrim (numbers, trimPercentage) {
    const totalAmountOfNumbers = numbers.length
    const amountOfNumbersToTrim = Math.floor((totalAmountOfNumbers * trimPercentage) / 100)
    return amountOfNumbersToTrim
  }

  /**
   * Private method used to trim the lowest and highest numbers from the array based on number of elements to trim.
   * Used in calculateTrimmedMeanValue method.
   */
  #trimNumbersInArray (numbers, amountOfNumbersToTrim) {
    const trimmedArray = []
    for (let i = amountOfNumbersToTrim; i < numbers.length - amountOfNumbersToTrim; i++) {
      trimmedArray.push(numbers[i])
    }
    return trimmedArray
  }

  /**
   * Public method to calculate the trimmed mean value form an array.
   * Trims a specified percentage from the smallest and largest values before calculating the mean.
   */
  calculateTrimmedMeanValue (numbers, trimPercentage) {
    checkArraysInput(numbers)
    const sortedNumbersFromArray = this.#sortNumbersInArray(numbers)

    const amountOfNumbersToTrim = this.#calculateAmountOfNumbersToTrim(sortedNumbersFromArray, trimPercentage)
    const trimmedArray = this.#trimNumbersInArray(sortedNumbersFromArray, amountOfNumbersToTrim)
    const totalSum = this.#sumNumbersInArray(trimmedArray)
    return totalSum / trimmedArray.length
  }
}
