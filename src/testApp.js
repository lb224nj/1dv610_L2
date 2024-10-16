import { MeanValueCalculations, MedianValueCalculations, VarianceValueCalculations, ModeValueCalculations, RangeValueCalculations } from './mathOperations.js'

// Instance of MeanValueCalculations class, used for manual testing of mean value calculations.
const meanValueCalculator = new MeanValueCalculations()

// Test array for manual testing of mean value calculations.
const testNumbersForMeanValue = [8, 4, 16, 12, 20, 24]
// Test array for manual testing of mean value calculations with a value of 0 included.
const secondTestNumbersForMeanValue = [4, 8, 12, 16, 20, 24, 0]

// Manual testing of mean value calculations.
const meanValue = meanValueCalculator.calculateMeanValue(testNumbersForMeanValue)
console.log(`Mean value of [${testNumbersForMeanValue}] is:`, meanValue)

const secondMeanValue = meanValueCalculator.calculateMeanValue(secondTestNumbersForMeanValue)
console.log(`Mean value of [${secondTestNumbersForMeanValue}] is:`, secondMeanValue)

// Manual testing of geometric mean value calculations.
const geometricMeanValue = meanValueCalculator.calculateGeometricMeanValue(testNumbersForMeanValue)
console.log(`Geometric mean value of [${testNumbersForMeanValue}] is:`, geometricMeanValue)

const secondGeometricMeanValue = meanValueCalculator.calculateGeometricMeanValue(secondTestNumbersForMeanValue)
console.log(`Geometric mean value of [${secondTestNumbersForMeanValue}] is:`, secondGeometricMeanValue)

// Manual testing of harmonic mean value calculations.
const harmonicMeanValue = meanValueCalculator.calculateHarmonicMeanValue(testNumbersForMeanValue)
console.log(`Harmonic mean value of [${testNumbersForMeanValue}] is:`, harmonicMeanValue)

const secondHarmonicMeanValue = meanValueCalculator.calculateHarmonicMeanValue(secondTestNumbersForMeanValue)
console.log(`Harmonic mean value of [${secondTestNumbersForMeanValue}] is:`, secondHarmonicMeanValue)

// Test arrays for manual testing of trimmed mean value calculations.
const testNumbersForTrimmedMeanValue = [8, 4, 16, 12, 20, 24, 50, 60, 20, 30, 12, 15, 18, 22, 25, 28, 32, 35, 38, 42]
const secondTestNumbersForTrimmedMeanValue = [0, 0, 0, 0, 20, 24, 50, 60, 20, 30, 12, 15, 18, 22, 25, 28, 32, 35, 38, 42, 0, 0, 0, 35, 60, 0, 0, 0, 0]

// Manual testing of trimmed mean value calculations with ten percent.
const trimmedMeanValueTenPercent = meanValueCalculator.calculateTrimmedMeanValue(testNumbersForTrimmedMeanValue, 10)
console.log(`Trimmed mean value of [${testNumbersForTrimmedMeanValue}] with 10% trimmed is:`, trimmedMeanValueTenPercent)

const secondTrimmedMeanValueTenPercent = meanValueCalculator.calculateTrimmedMeanValue(secondTestNumbersForTrimmedMeanValue, 10)
console.log(`Trimmed mean value of [${secondTestNumbersForTrimmedMeanValue}] with 10% trimmed is:`, secondTrimmedMeanValueTenPercent)

// Manual testing of trimmed mean value calculations with forty percent.
const trimmedMeanValueFortyPercent = meanValueCalculator.calculateTrimmedMeanValue(testNumbersForTrimmedMeanValue, 40)
console.log(`Trimmed mean value of [${testNumbersForTrimmedMeanValue}] with 40% trimmed is:`, trimmedMeanValueFortyPercent)

const secondTrimmedMeanValueFortyPercent = meanValueCalculator.calculateTrimmedMeanValue(secondTestNumbersForTrimmedMeanValue, 40)
console.log(`Trimmed mean value of [${secondTestNumbersForTrimmedMeanValue}] with 40% trimmed is:`, secondTrimmedMeanValueFortyPercent)

// Instance of MedianValueCalculations class, used for manual testing of median value calculations.
const medianValueCalculator = new MedianValueCalculations()

// Test array for manual testing of median value calculations with an uneven number of integers.
const testNumbersForMedianValue = [3, 1, 2, 4, 5]
// Test array for manual testing of median value calculations with an even number of integers.
const secondTestNumbersForMedianValue = [3, 1, 2, 4, 5, 0]

// Manual testing of median value calculations.
const medianValue = medianValueCalculator.calculateMedianValue(testNumbersForMedianValue)
console.log(`Median value of [${testNumbersForMedianValue}] is:`, medianValue)

const secondMedianValue = medianValueCalculator.calculateMedianValue(secondTestNumbersForMedianValue)
console.log(`Median value of [${secondTestNumbersForMedianValue}] is:`, secondMedianValue)

// Instance of VarianceValueCalculations class, used for manual testing of variance value calculations.
const varianceValueCalculator = new VarianceValueCalculations()

// Manual testing of variance value calculations.
const varianceValue = varianceValueCalculator.calculateVarianceValue(testNumbersForMeanValue)
console.log(`Variance value of [${testNumbersForMeanValue}] is:`, varianceValue)

const secondVarianceValue = varianceValueCalculator.calculateVarianceValue(secondTestNumbersForMeanValue)
console.log(`Variance value of [${secondTestNumbersForMeanValue}] is:`, secondVarianceValue)

// Manual testing of standard deviation value calculations.
const standardDeviationValue = varianceValueCalculator.calculateStandardDeviationValue(testNumbersForMeanValue)
console.log(`Standard deviation value of [${testNumbersForMeanValue}] is:`, standardDeviationValue)

const secondStandardDeviationValue = varianceValueCalculator.calculateStandardDeviationValue(secondTestNumbersForMeanValue)
console.log(`Standard deviation value of [${secondTestNumbersForMeanValue}] is:`, secondStandardDeviationValue)

// Instance of ModeValueCalculations class, used for manual testing of mode value calculations.
const modeValueCalculator = new ModeValueCalculations()

// Test array for manual testing of mode value calculations.
const testNumbersForModeValue = [4, 1, 4, 4, 2, 3, 2, 4, 3]
// Test array for manual testing of mode value calculations with multiple modes.
const secondTestNumbersForModeValue = [4, 4, 0, 2, 2, 3, 1, 6, 8, 1]

// Manual testing of mode value calculations.
const modeValue = modeValueCalculator.calculateModeValue(testNumbersForModeValue)
console.log(`Mode value of [${testNumbersForModeValue}] is:`, modeValue)

const secondModeValue = modeValueCalculator.calculateModeValue(secondTestNumbersForModeValue)
console.log(`Mode value of [${secondTestNumbersForModeValue}] is:`, secondModeValue)

// Instance of RangeValueCalculations class, used for manual testing of range value calculations.
const rangeValueCalculator = new RangeValueCalculations()

// Test array for manual testing of range value calculations.
const testNumbersForRangeValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15]
// Test array for manual testing of range value calculations including negative numbers.
const secondTestNumbersForRangeValue = [-10, -8, -4, -2, 0, 4, 8, 10.5]

// Manual testing of range value calculations.
const rangeValue = rangeValueCalculator.calculateRangeValue(testNumbersForRangeValue)
console.log(`Range value of [${testNumbersForRangeValue}] is:`, rangeValue)

const secondRangeValue = rangeValueCalculator.calculateRangeValue(secondTestNumbersForRangeValue)
console.log(`Range value of [${secondTestNumbersForRangeValue}] is:`, secondRangeValue)

// Manual testing of interquartile range value calculations.
const interquartileRangeValue = rangeValueCalculator.calculateInterquartileRangeValue(testNumbersForRangeValue)
console.log(`Interquartile range value of [${testNumbersForRangeValue}] is:`, interquartileRangeValue)

const secondInterquartileRangeValue = rangeValueCalculator.calculateInterquartileRangeValue(secondTestNumbersForRangeValue)
console.log(`Interquartile range value of [${secondTestNumbersForRangeValue}] is:`, secondInterquartileRangeValue)
