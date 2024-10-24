# Test report for math operations module.

## This report shows the result of the manual testing of the modules different math calculations public methods. All test cases is related to arrays of numbers since the modules functionality is entierly focused in that area. The tests has been performed in a "test app" where different types of arrys related to specific methods has been used. The result of the module calculations has been compared to the actual expected values from the different types of calculations performed on the arrays of numbers. The tests also includes testing of validation aiming to ensure the arrays contains at least one number and only numbers and that the input is actual arrays. 

## Test Cases

| Method Name                  | How It Was Tested                                 | Test Result                         |
|------------------------------|---------------------------------------------------|-------------------------------------|
| 1. calculateMeanValue                               | Tested with valid array and compared calculated mean value by actual mean value verified with a calculator                                                 | OK                                    | 
|2. calculateMeanValue                              | Tested with valid array containing a number 0 and compared calculated mean value with actual mean value verified with a calculator                                                   | OK                                    |
| 3. calculateMeanValue                              | Tested with an invalid array containing strings (not only numbers) to check whether error was catched and message logged.                                                   | OK                                    | 
| 4. calculateGeometricMeanValue                              | Tested with valid array and compared calculated geometric mean value with actual geometric mean value.                                                   | OK                                    |
| 5. calculateGeometricMeanValue                             | Tested with array containg a number 0 to check whether error was catched and message logged.                                                  | OK                                    |
| 6. calculateGeometricMeanValue                             | Tested with an invalid array containing strings (not only numbers) to check whether error was catched and message logged.                                                   | OK                                    |
| 7. calculateHarmonicMeanValue                             | Tested with valid array and compared calculated harmonic mean value with actual harmonic mean value.                                                  | OK                                    | 
| 8. calculateHarmonicMeanValue                              | Tested with array containg a number 0 to check whether error was catched and message logged.                                                  | OK                                    |
| 9. calculateHarmonicMeanValue                             | Tested with an invalid array containing strings (not only numbers) to check whether error was catched and message logged.                                                  | OK                                    |
| 10. calculateTrimmedMeanValue                            | Tested with valid array containing 20 numbers with 10 and 40 percent to be trimmed and compared calculated trimmed value with actual trimmed meanvalue.                                                  | OK                                    |
| 11. calculateTrimmedMeanValue                             | Tested with valid array containing 29 numbers and multiple zeros with 10 and 40 percent to be trimmed and compared with actual trimmed mean value.                                                    | OK                                    |
| 12. calculateTrimmedMeanValue                             | Tested with invalid array containing strings (not only numbers) with 10 an 40 percent to be trimmed to check whether error was catched and message logged.                                                 | OK                                    |
| 13. calculateMedianValue                             | Tested with valid array containing an uneven number of numbers and compared calculated median value with verified median value.                                                  | OK                                    |
| 14. calculateMedianValue                            | Tested with valid array containing an even number of numbers and compared calculated median value with actual median value                                                  | OK                                    |
| 15. calculateMedianValue                             | Tested with an invalid array containing strings (not only numbers) to check whether error was catched and message logged.                                                  | OK                                    |
| 16. calculateVarianceValue                            | Tested with valid array containing an even number amount of numbers and compared calculated variance value with actual variance value.                                                  | OK                                    |
| 17. calculateVarianceValue                            | Tested with valid array containing the number 0 and an uneven number amount of numbers and compared calculated variance value with actual variance value.                                                  | OK                                    |
| 18. calculateVarianceValue                            | Tested with an invalid array containing strings (not only numbers) to check whether error was catched and message logged.                                                  | OK                                    |
| 19. calculateStandardDeviationValue                            | Tested with valid array containing an even number amount of numbers and compared calculated standard deviation value with actual standard deviation value.                                                  | OK                                    |
| 20. calculateStandardDeviationValue                            | Tested with valid array containing the number 0 and an uneven number amount of numbers and compared calculated standard deviation value with actual standard deviation value.                                                  | OK                                    |
| 21. calculateStandardDeviationValue                             | Tested with an invalid array containing strings (not only numbers) to check whether error was catched and message logged.                                                  | OK                                    |
| 22. calculateModeValue                             | Tested with valid array of numbers containing one mode value and compared calculated mode value with actual mode value.                                                  | OK                                    |
| 23. calculateModeValue                          | Tested with valid array containing multiple mode values and a 0 and compared calculated mode values with actual mode values.                                                  | OK                                    |
| 24. calculateModeValue                            | Tested with an invalid array containing strings (not only numbers) to check whether error was catched and message logged.                                                  | OK                                    |
| 25. calculateRangeValue                            | Tested with valid array containing an uneven amount of positive integers and compared calculated range value with actual range value.                                                 | OK                                    |
| 26. calculateRangeValue                            | Tested with valid array containing an even amount of positive and negative numbers including integers and one decimal number and compared calculated range value with actual range value.                                                   | OK                                    |
| 27. calculateRangeValue                             | Tested with an invalid array containing strings (not only numbers) to check whether error was catched and message logged.                                                  | OK                                    |
| 28. calculateInterquartileRangeValue                            | Tested with valid array containing an uneven amount of positive integers and compared calculated interquartile range value with actual interquartile range value.                                                  | OK                                    |
| 29. calculateInterquartileRangeValue                             | Tested with valid array containing an even amount of positive and negative numbers including integers and one decimal number and compared calculated interquartile range value with actual interquartile range value.                                                  | OK                                    |
| 30. calculateInterquartileRangeValue                            | Tested with an invalid array containing strings (not only numbers) to check whether error was catched and message logged.                                                  | OK                                    |
| Edge Cases                             |                                                   |                                     |
