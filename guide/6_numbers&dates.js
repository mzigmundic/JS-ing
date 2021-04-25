// Numbers
// Number object
// Math object
// Date object

/* ==================================================================== */
/*                              Numbers                                 */
/* ==================================================================== */
// < +/-2^-1022, +/-2^1023> or < +/-10^-308, +/-10^308>
// Besides float numbers, the number type has three symbolic values:
//   -Infinity
//   +Infinity
//   NaN

// ---------------------------- Decimal ----------------------------------
const myDecimal1 = 123456790; // 1234567890
const myDecimal2 = 43; // 43

// With leading zeros
const myDecimal3 = 0888; // parsed as decimal // 888
const myDecimal4 = 0777; // parsed as octal (511 in decimal) // 511

// ---------------------------- Binary -----------------------------------
// Prefix binary number with "0b" or "0B"
// If the digits after the 0b or 0B are not 0,1 -> SyntaxError
const myBinary1 = 0b01110110; // 118
const myBinary2 = 0b10101001; // 169

// ----------------------------- Octal -----------------------------------
// Prefix octal numbers with 0 or 0o. If digits after 0 or 0o are
//    outside the range 0 - 7, number will be interpreted as a decimal number
const myOctal1 = 0754; // 492
const myOctal2 = 0652; // 426
const myOctal3 = 0o652; // 426
const myOctal4 = 0832; // decimal // 832

// -------------------------- Hexadecimal --------------------------------
// Prefix hexadecimal numbers with 0x or 0X. If digits after 0x are outside
//    the range 0123456789ABCDEF -> SyntaxError
const myHexa1 = 0xff; // 255
const myHexa2 = 0x0c; // 12

// ------------------------ Exponentiation -------------------------------
const myExpo1 = 1e-3; // 0.001
const myExpo2 = 2e3; // 2000
const myExpo3 = 0.1e3; // 100

/* ==================================================================== */
/*                           Number object                              */
/* ==================================================================== */
// Properties for numerical constants
const maxValue = Number.MAX_VALUE; // 1.7976931348623157e+308
const minValue = Number.MIN_VALUE; // 5e-324
const maxSafeInt = Number.MAX_SAFE_INTEGER; // 9007199254740991
const minSafeInt = Number.MIN_SAFE_INTEGER; // -9007199254740991
const negInfinity = Number.NEGATIVE_INFINITY; // -Infinity
const posInfinity = Number.POSITIVE_INFINITY; // Infinity
const myNan = Number.NaN; // NaN
const myEpsilon = Number.EPSILON; // 2.220446049250313e-16

// Static methods
const myInt = Number.parseInt("2"); // 2
const myFloat = Number.parseFloat("2.5e34"); // 2.5e+34
const myBool1 = Number.isFinite(1 / 0); // false
const myBool2 = Number.isInteger(2.3); // false
const myBool3 = Number.isSafeInteger(234); // true
const myBool4 = Number.isNaN("d3" * 3); // true

// Instance methods
// toExponential() - returns a string in exponential notation
// toFixed() - returns a string in fixed-point notation
// toPrecision() - returns a string to a specified precision in fixed point notation
const myNumber1 = 584;
const myNumber1ToExp = myNumber1.toExponential(); // 5.84e+2
const myNumber1ToFix = myNumber1.toFixed(6); // 584.000000
const myNumber1ToPrec = myNumber1.toPrecision(6); // 584.000

/* ==================================================================== */
/*                             Math object                              */
/* ==================================================================== */
// Some properties
const myEuler = Math.E; // 2.718281828459045
const myPi = Math.PI; // 3.141592653589793
const mySqrtOneHalf = Math.SQRT1_2; // 0.7071067811865476
const mySqrtTwo = Math.SQRT2; // 1.4142135623730951

// Some static methods
const myAbs = Math.abs(-3.3); // 3.3
const myCeil = Math.ceil(4.2); // 5
const myFloor = Math.floor(4.8); // 4
const myRound1 = Math.round(2.2); // 2
const myRound2 = Math.round(2.6); // 3
const myTrunc = Math.trunc(5.342); // 5
const myMax = Math.max(-12, 3, 1, 5, 9, 7); // 9
const myMin = Math.min(-12, 3, 1, 5, 9, 7); // -12
const myRandom = Math.random(); // 0.3219704237296044

/* ==================================================================== */
/*                             Date object                              */
/* ==================================================================== */
// Respresent a single moment in time
// Contains a Number that represents miliseconds since 1.1.1970 UTC
// < +/- 100 000 000 days relative to 1.1.1970 >
// < 271 821 Before Christ - 275 760 After christ >

// Constructor
const myDate1 = new Date(); // Wed Mar 31 2021 17:35:38 GMT+0200 (Central European Summer Time)
const myDate2 = new Date(1991, 8, 20); // Fri Sep 20 1991 00:00:00 GMT+0200 (Central European Summer Time)
const myDate3 = new Date(1991, 8, 20, 13, 55, 34); // Fri Sep 20 1991 13:55:34 GMT+0200 (Central European Summer Time)
const myDate4 = new Date("1991-09-20"); // Fri Sep 20 1991 02:00:00 GMT+0200 (Central European Summer Time)
const myDate5 = new Date("1991-09-20T13:55:34"); // Fri Sep 20 1991 13:55:34 GMT+0200 (Central European Summer Time)
const myDate6 = new Date("Sep 20, 1991"); // Fri Sep 20 1991 00:00:00 GMT+0200 (Central European Summer Time)
const myDate7 = new Date("Sep 20, 1991 13:55:34"); // Fri Sep 20 1991 13:55:34 GMT+0200 (Central European Summer Time)
const myDate8 = new Date("September 20, 1991 13:55:34"); // Fri Sep 20 1991 13:55:34 GMT+0200 (Central European Summer Time)

// Static methods
const myDateNow = Date.now(); // 1617206299417
const myDateParse1 = Date.parse("1991-09-20T13:55:34"); // 685367734000
const myDateParse2 = Date.parse("September 20, 1991 13:55:34"); // 685367734000
const myDateUTC = Date.UTC(1991, 8, 29, 13, 55, 34); // 686152534000

// Instance methods - getters
const myFullYear = myDate1.getFullYear(); // 2021
const myDayInMonth = myDate1.getDate(); // 31
const myDayInWeek = myDate1.getDay(); // 3
const myHours = myDate1.getHours(); // 17
const myMinutes = myDate1.getMinutes(); // 35
const mySeconds = myDate1.getSeconds(); // 38
const myMilliseconds = myDate1.getMilliseconds(); // 994
const myTime = myDate1.getTime(); // 1617208225394

// Instance methods - setters
const myDate10 = new Date();
// console.log(myDate10); // Wed Mar 31 2021 18:18:54 GMT+0200 (Central European Summer Time)
myDate10.setFullYear(1991);
myDate10.setDate(20);
myDate10.setHours(13);
myDate10.setMinutes(55);
myDate10.setSeconds(34);
myDate10.setMilliseconds(786);
// console.log(myDate10); // Wed Mar 20 1991 13:55:34 GMT+0100 (Central European Standard Time)
