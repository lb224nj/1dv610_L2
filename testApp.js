import { MeanValueCalculations, MedianValueCalculations, VarianceValueCalculations } from './mathOperations.js'

// Instance of MeanValueCalculations class, used for manual testing of mean value calculations.
const meanValueCalculator = new MeanValueCalculations()

// Test array for manual testing of median value calculations.
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

const varianceValue = varianceValueCalculator.calculateVarianceValue(testNumbersForMeanValue)
console.log(`Variance value of [${testNumbersForMeanValue}] is:`, varianceValue)

const secondVarianceValue = varianceValueCalculator.calculateVarianceValue(secondTestNumbersForMeanValue)
console.log(`Variance value of [${secondTestNumbersForMeanValue}] is:`, secondVarianceValue)
