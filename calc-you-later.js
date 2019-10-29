const userInput = prompt('Enter your mathematical question for promptulate to answer!').split(' ');

const num1 = userInput[userInput.length - 2];
const num2 = userInput[userInput.length - 1];

// Take care of the fact that they might've passed in something like:
// '3 added to 5'
// Instead of:
// '3 + 5';
// If they did, we'll have an array of 4 items instead of 3!
const operation = userInput.length > 3
  ? `${userInput[0]} ${userInput[1]}`
  : userInput[0];

const result = calculate(operation, num1, num2);
document.querySelector('#result').innerText = result;