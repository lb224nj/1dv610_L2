/**
 * @class MeanValueCalculations
 *
 * This class contains private and public methods related to making mean value calculations.
 */
class MeanValueCalculations {
  /**
   * Private method that makes sure the recieved input is an array ant that it contains at least one number.
   */
  #checkArraysInput (numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error('Input should be an array')
    }
    if (numbers.length === 0) {
      throw new Error('The input must contain one number at a minimum')
    }
  }
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
    this.checkArraysInput(numbers)
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
    this.checkArraysInput(numbers)
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
    this.checkArraysInput(numbers)
    const sumOfReciprocals = this.#sumReciprocalsInArray(numbers)
    return numbers.length / sumOfReciprocals
  }
}
