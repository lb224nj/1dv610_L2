## Math Operations
This library is aimed to help developers in need of ways to do different kind of math calculations. It can be used for statictical analysis, stock market analysis and so on.

## Installation guide
Firstly, clone the public repo to your local machine:
````
git clone https://github.com/lb224nj/1dv610_L2.git your-folder
cd your-folder

````
If you want to contribute to the project or run the same environment as it was devloped in (regarding code linting and such) you can install the dev dependencies like:
````
npm install
````
Once repo is cloned, you can use the library by using a relative path in your project. Like this:
````
 import { MeanValueCalculations, MedianValueCalculations } from './your-folder/src/mathOperations.js'
 ````
 The path above points to the main file "mathOperations.js" where the public interface is exported, so that you can use them in your own project.

 ## Code Example
 A simple example showing how the library can be used:

 ````
 // Calculation of a mean value
 import  { MeanValueCalculations, ModeValueCalculations } from './your-folder/src/mathOperations.js'
 const myMeanValueCalculator = new MeanValueCalculations()
 const meanValue = myMeanValueCalculator.calculateMeanValue([1, 4, 8, 84])
 console.log(`The mean value of the numbers are: ${meanValue}`)

 // Calculation of a mode value

 const myModeValueCalculator = new ModeValueCalculations()
 const modeValue = myModeValueCalculator.calculateModeValue([1, 1, 1, 1, 5, 8, 10, -4])
 console.log(`The mode value of the numbers are: ${modeValue}`)