const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (const num of numbers) {
  if (num < 0) {
    negativeCount++;
  } else if (num > 0) {
    positiveCount++;
  } else {
    zeroCount++;
  }
}

console.log("Positive numbers quantity:", positiveCount);
console.log("Negative numbers quantity:", negativeCount);
console.log('"Zero" numbers quantity:', zeroCount);
