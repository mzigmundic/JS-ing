/* ==================================================================== */
/*                            String literals                           */
/* ==================================================================== */
// Zero or more characters enclosed in (") or (')
// Any of the String object's methods on a string literal can be called
// JS automatically converts the string literal to a temporary String object,
//    calls a method, then discards the temporary String object
// Property String.length can also be used

const myString1 = "Foo";
const myString2 = "Bar";
const myString3 = "1234";
const myString4 = "first line\n second line";
const myString5 = "John's dog";
// console.log(myString1);
// console.log(myString2);
// console.log(myString3);
// console.log(myString4);
// console.log(myString5);
// console.log(myString3.length); // 4

// ES6 introduced a template literal, which are enclosed by (`) back-tick
const myStringTemp1 = `My String Temp`;
const myStringTemp2 = `Multiline string
sounds good
`;
// console.log(myStringTemp1);
// console.log(myStringTemp2);

// Interpolation
const myVariable = "Bobert";
const myStringTemp3 = `I can insert a ${myVariable} in here`;
// console.log(myStringTemp3); // I can insert a Bobert in here

/* ==================================================================== */
/*                    Special characters in strings                     */
/* ==================================================================== */
// \0       Null Byte
// \b       Backspace
// \f       Form feed
// \n       New line
// \r       Carrige return
// \t       Tab
// \v       Vertical tab
// \'       Apostrophe or single quote
// \"       Double quote
// \\       Backslash character
// \XXX     Char whith the Latin-1 encoding, three octal digits 0 - 377; example \251 - copyright symbol
// \xXX     Char whith the Latin-1 encoding, two hexadecimal digits 0 - FF; example \xA9 - copyright sym
// \uXXXX   Unicode char, four hexadecimal digits; example \u00A9 - copyright symbol
// \u{XXXXX} Unicode code point escapes; example \u{2F804} same as \uD87E\uDC04

// console.log("\0");
// console.log("\b");
// console.log("\f");
// console.log("\n");
// console.log("\r");
// console.log("\t");
// console.log("\v");
// console.log("'");
// console.log('"');
// console.log("\\");
// console.log("\251");
// console.log("\x49");
// console.log("\u0049");
// console.log("\u{2F804}");
// console.log("\uD87E\uDC04");

/* ==================================================================== */
/*                            String object                             */
/* ==================================================================== */
// Wrapper around the string primitive data
const myString10 = "a string"; // a string
const myString11 = new String(myString10); // String {"a string"}
// console.log(typeof myString10); // string
// console.log(typeof myString11); // object

const myStr = "A little string to investigate";
const myStrLen = myStr.length; // 30
const myCharAt = myStr.charAt(3); // i
const myCharCodeAt = myStr.charCodeAt(3); // 105
const myCodePointAt = myStr.codePointAt(3); // 105
const myIncludes = myStr.includes("ttl"); // true
const myEndsWith = myStr.endsWith("te"); // true
const myIndexOf = myStr.indexOf("t"); // 4
const myLastIndexOf = myStr.lastIndexOf("t"); // 28
const myMatch = myStr.match(/[a-z]/g); // (25) ["l", "i", "t", "t", "l", "e", "s", ...]
const myPadEnd = myStr.padEnd(35, "."); // A little string to investigate.....
const myPadStart = myStr.padStart(35, ","); // ,,,,,A little string to investigate
const myRepeat = "Kazo".repeat(4); // KazoKazoKazoKazo
const myReplace = myStr.replace("str", "suck"); // A little sucking to investigate
const mySlice1 = myStr.slice(5); // tle string to investigate
const mySlice2 = myStr.slice(5, 8); // tle
const mySplit1 = myStr.split(); // ["A little string to investigate"]
const mySplit2 = myStr.split(" "); // (5) ["A", "little", "string", "to", "investigate"]
const mySplit3 = myStr.split(""); // (30) ["A", "", "l", "i", "t", "t" ...] // Do not use this
const mySplit4 = [...myStr]; // (30) ["A", "", "l", "i", "t", "t" ...] // use this instead
const mySplit5 = myStr.split("", 10); // (10) ["A", " ", "l", "i", "t", "t", "l", "e", " ", "s"]
const myStartsWith = myStr.startsWith("A l"); // true
const mySubstring1 = myStr.substring(5); // tle string to investigate
const mySubstring2 = myStr.substring(5, 8); // tle
const myToLowerCase = myStr.toLowerCase(); // a little string to investigate
const myToUpperCase = myStr.toUpperCase(); // A LITTLE STRING TO INVESTIGATE
const myTrim = myStr.trim(); // A little string to investigate
const myTrimStart = myStr.trimStart(); //  - || -
const myTrimEnd = myStr.trimEnd(); //  - || -
