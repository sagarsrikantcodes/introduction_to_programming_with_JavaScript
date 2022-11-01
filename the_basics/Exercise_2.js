// Using arithmetic operators get the individual digits of a 4-digit number like 4936
let num = 4936;
// Determine the rightmost digit 
let onesDigit = num % 10; // 6
num = num - onesDigit; // 4930
num = num / 10; // 493
let tensDigit = num % 10; // 3
num = num - tensDigit; //490
num = num / 10; // 49
let hundredsDigit = num % 10; // 9
num = num - hundredsDigit; // 40
num = num / 10; // 4
let thousandsDigit = num % 10; // 4

console.log('Ones Digit is ' + onesDigit);
console.log('Tens Digit is ' + tensDigit);
console.log('Hundreds Digit is ' + hundredsDigit);
console.log('Thousands Digit is ' + thousandsDigit);


