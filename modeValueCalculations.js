import { checkArraysInput } from './helperFunctions'

/**
 * Class used for calculation of the mode value from an array of numbers.
 */
export class ModeValueCalculations {
  /**
   * Private method that counts the frequency of each number in an array. Used in calculateModeValue method.
   */
  #calculateFrequencyOfNumbers (numbers) {
    const frequencyOfNumbers = {}

    for (let i = 0; i < numbers.length; i++) {
      const currentNumber = numbers[i]

      if (frequencyOfNumbers[currentNumber] !== undefined) {
        frequencyOfNumbers[currentNumber]++
      } else {
        frequencyOfNumbers[currentNumber] = 1
      }
    }
    return frequencyOfNumbers
  }

  /**
   * Private method that extracts the mode value from the frequency object. Used in calculateModeValue method.
   */
  #extractModeValueFromFrequency (frequencyOfNumbers) {
    let modeValue = []
    let highestFrequency = 0

    for (const number in frequencyOfNumbers) {
      const currentFrequency = frequencyOfNumbers[number]
      if (currentFrequency > highestFrequency) {
        modeValue = [Number(number)]
        highestFrequency = currentFrequency
      } else if (currentFrequency === highestFrequency) {
        modeValue.push(Number(number))
      }
    }
    return modeValue
  }
}
