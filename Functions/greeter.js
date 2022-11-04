// Function invocation 
function getName(text) {
  // User Input for the first name
  let rlSync = require('readline-sync');
  let name = rlSync.question(text);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
let fullName = firstName + ' ' +lastName;

console.log(`Your full name is ${fullName}`);
