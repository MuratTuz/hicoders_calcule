/**
 * 
 * @param {number} firstParameter is the first number of the calculation
 * @param {number} secondParameter is the second number of the calculation
 * @param {number} calculationType is the type of the calculation. 1 is for addition, 2 is for substraction
 * 3 is for multiplication and 4 is for division.
 * 
 * The error of the division by zero would be handled in index.js
 */
function process(firstParameter, secondParameter, calculationType) {

    var result = 0;
    switch (calculationType) {
        case 1: result = firstParameter + secondParameter; break;
        case 2: result = firstParameter - secondParameter; break;
        case 3: result = firstParameter * secondParameter; break;
        case 4: result = firstParameter / secondParameter; break;
    }

    return result;
}

module.exports = process