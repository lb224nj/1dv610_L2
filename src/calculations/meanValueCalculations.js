import { checkArraysInput } from '../helperFunctions.js'
/**
 * Class used for calculation of the mean value from an array of numbers.
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
    try {
      checkArraysInput(numbers)
      const totalSum = this.#sumNumbersInArray(numbers)
      return totalSum / numbers.length
    } catch (error) {
      throw new Error('There was an error when calculating the mean value, ensure the input is an array of numbers.')
    }
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
   * Private method for controlling the numbers in array are positive. Used in calculateGeometricMeanValue 
   * and calculateHarmonicMeanValue method.
   * Throws an error if a negative / zero number is found.
   */
  #checkIfNumbersFromArrayArePositive (numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] <= 0) {
        throw new Error('All numbers in the array must be positive in order to calculate a geometric mean value.')
      }
    }
  }

  /**
   * Calculates the geometric mean value from an array of numbers. Uses helper function checkArraysInput
   * for validation and the private method #multiplyNumbersInArray to multiply all numbers in the array.
   * It also uses the private method #checkIfNumbersFromArrayArePositive to ensure all numbers are positive.
   */
  calculateGeometricMeanValue (numbers) {
    try {
      checkArraysInput(numbers)
      this.#checkIfNumbersFromArrayArePositive(numbers)

      const totalProduct = this.#multiplyNumbersInArray(numbers)
      return Math.pow(totalProduct, 1 / numbers.length)
    } catch (error) {
      throw new Error('There was an error calculating the geometric mean value. Ensure the input is an array of only positive numbers.')
    }
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
    try {
      checkArraysInput(numbers)
      this.#checkIfNumbersFromArrayArePositive(numbers)

      const sumOfReciprocals = this.#sumReciprocalsInArray(numbers)
      return numbers.length / sumOfReciprocals
    } catch (error) {
      throw new Error('There was an error calculating the harmonic mean value. Ensure the input is an array of only positive numbers.')
    }
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
    try {
      checkArraysInput(numbers)
      const sortedNumbersFromArray = this.#sortNumbersInArray(numbers)

      const amountOfNumbersToTrim = this.#calculateAmountOfNumbersToTrim(sortedNumbersFromArray, trimPercentage)
      const trimmedArray = this.#trimNumbersInArray(sortedNumbersFromArray, amountOfNumbersToTrim)
      const totalSum = this.#sumNumbersInArray(trimmedArray)

      return totalSum / trimmedArray.length
    } catch (error) {
      throw new Error('There was an error calculating the trimmed mean value. Ensure the input is an array of numbers')
    }
  }
}
