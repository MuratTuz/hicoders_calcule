
/**
 * 
 * @param {number} paramMiladi is the current year in the Gregorian calendar which is to be converted to Hijri calendar
 * 
 * The function returns Hijri equivalent of Gregorian calendar's year 
 */
function hicri(paramMiladi) {
    const gap = paramMiladi - 621;
    const miladi = gap + (gap % 33)

    return miladi
}

/**
 * 
 * @param {number} paramHijri is the current year in the Hijri calendar which is to be converted to Gregorian calendar
 * 
 * The function returns Gregorian equivalent of Hijri calendar
 */
function miladi(paramHijri) {
    const gap = paramHijri % 33
    const miladi = paramHijri - gap + 622

    return miladi
}

module.exports = {
    hijri: hicri,
    gregorian: miladi
}