const numbers = [10, 20, 30, 40, 50];

const sumNumbers = numbers.reduce((num, startValue) => num + startValue, 0);

console.log(sumNumbers);