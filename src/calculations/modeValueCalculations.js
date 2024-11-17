import { InputValidator } from '../inputValidator.js'

/**
 * Class for calculating the mode value (which is the most frquently occurring value / values) from an array of numbers.
 */
export class ModeValueCalculations extends InputValidator {
  calculateModeValue (numbers) {
    this.validateInput(numbers)

    const frequencyOfNumbers = this.#calculateFrequencyOfNumbers(numbers)

    const modeValue = this.#extractModeValueFromFrequency(frequencyOfNumbers)

    if (modeValue.length === 1) {
      return modeValue[0]
    } else {
      return modeValue
    }
  }

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
