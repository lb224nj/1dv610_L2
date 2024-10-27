## Math Operations
This library is aimed to help developers in need of ways to do different kind of math calculations. It can be used for statictical analysis, stock market analysis and so on.

## Module Version and Releases
Current Version: 1.0.0<br>
v1.0.0 - Intitial release focusing on math calculations related to: mean values, median values, mode values, range values and variance values. 

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

 ````
 ## Dependencies, Versioning and Language
 ### Dependencies<br>
 The module only contain development dependencies and all dependencies are for development purposes only:<br>
 @lnu/eslint-config: ^1.1.10"<br>eslint: ^8.47.0<br>eslint-config-standard: ^17.1.0<br>eslint-plugin-import: ^2.28.1<br>eslint-plugin-jsdoc: ^46.5.0<br>eslint-plugin-node: ^11.1.0<br>eslint-plugin-promise: ^6.1.1<br>

 To install those dependencies, run the following:
 ````
 npm install

 ````
 ### Language and Versions<br>
 JavaScript (ES6+)<br>
 Library is created with the use of JavaScript (ES6+) and JavaScript runtime version Node.js v21.6.1


 