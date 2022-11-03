// let rlSync = require('readline-sync');
// let name = rlSync.question('What is your name? ');
// console.log(`Hello, ${name}!`);

// Browser Solution
// let name = prompt("What's your name? ");
// console.log(`Hello, ${name}!`);

// Modified greeter.js file
let rlSync = require('readline-sync');
let firstName = rlSync.question('What is your first name? ');
let lastName = rlSync.question('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);

//let firstName = prompt("What is your first name? ");
//let lastName = prompt("What is your last name? ");
//console.log(`Hello, ${firstName} ${lastName}!`);