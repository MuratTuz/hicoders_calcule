
/**
 * This function takes two parameters which are the year and the convertion type of calendar 
 * 
 * For Hijri convertion it needs to be entered 'H' letter and for Gregorian 'G'
 * 
 */
const { hijri, gregorian } = require('./calendar');

const year = Number(process.argv[2]); // the year which is to be converted
const typeOfTransformation = process.argv[3]; // for Hijri 'H' and for Gregorian 'G'

if (typeOfTransformation === 'G') {
    console.log(`Gregorian ${year} is equal to ${hijri(year)} Hijri year`)
} else {
    console.log(`Hijri ${year} is equal to ${gregorian(year)} Gregorian year`)
}