// Function declaration
function getNumber(text){
  let rlSync = require('readline-sync');
  let number = rlSync.question(text);
  return number;
}

function multiplicationResult(a, b){
  return a * b;
}

let number1 = getNumber('Enter the first number: ');
let number2 = getNumber('Enter the second number: ');
console.log(`${number1} * ${number2} = ${multiplicationResult(number1, number2)}`);