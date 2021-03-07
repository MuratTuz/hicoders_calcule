
/**
 * Please use first two parameters as number of the calculation process 
    whereas the third parameter is for type of process such as
    1 is for addition, 
    2 is for substraction,
    3 is for multiplication,
    4 is for division.

    Besides, the error of divide by zero is handled in a if-else statement
 */

const calcul = require('./calculations');

const firstParam = Number(process.argv[2]);
const secondParam = Number(process.argv[3]);
const thirdParam = Number(process.argv[4]);

if (secondParam === 0 && thirdParam === 4) {
    console.log('ERROR \'Division by zero\'')
} else if (thirdParam < 1 || thirdParam > 4) {
    console.log('Please enter a valid process number which is between 0 and 4')
} else {
    console.log(calcul(firstParam, secondParam, thirdParam))
}