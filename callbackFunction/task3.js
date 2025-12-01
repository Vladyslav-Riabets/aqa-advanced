const divide = function (numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Cannot divide by Zero");
  }

  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Numerator and Denominator must be numbers!");
  }

  return numerator / denominator;
};

//Valid inputs
try {
  let division = divide(8, 4);
  console.log(`Result: ${division}`);
} catch (error) {
  console.log(`Error: ${error.message}`);
} finally {
  console.log("Робота завершена");
}

// Divide by Zero
try {
  let division = divide(8, 0);
  console.log(`Result: ${division}`);
} catch (error) {
  console.log(`Error: ${error.message}`);
} finally {
  console.log("Робота завершена");
}

// Numerator is Nan
try {
  let division = divide("a", 4);
  console.log(`Result: ${division}`);
} catch (error) {
  console.log(`Error: ${error.message}`);
} finally {
  console.log("Робота завершена");
}

// Denominator is Nan
try {
  let division = divide(10, "b");
  console.log(`Result: ${division}`);
} catch (error) {
  console.log(`Error: ${error.message}`);
} finally {
  console.log("Робота завершена");
}
