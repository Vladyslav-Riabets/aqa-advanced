// Function declaration
function calcArea(width, height) {
    return width * height;
}

const rectangleAreaOne = calcArea(5, 10);
console.log(`Rectangle area calculated with function declaration: ${rectangleAreaOne}`);

// Function expression
const calculateArea = function(width, height) {
    return width * height;
};

const rectangleAreaTwo = calculateArea (5, 10);
console.log(`Rectangle area calculated with function expression: ${rectangleAreaTwo}`);

// Arrow function
const calArea = (width, height) => width * height;

const rectangleAreaThree = calArea(5, 10);
console.log(`Rectangle area calculated with arrow function: ${rectangleAreaThree}`);
