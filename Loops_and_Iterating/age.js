let age = 20;
console.log(`You are ${age} years old.`);
// Future Ages
/*
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);
*/

// Modifying the age.js file and using for loop to display the future ages 
for (let index = 10; index <= 40; index += 10) {
  console.log(`In ${index} years, you will be ${age + index} years old.`);
}