function handleNum(num, callbackEven, callbackOdd) {
  if (num % 2 === 0) {
    callbackEven();
  } else {
    callbackOdd();
  }
}

function handleEven() {
  console.log("Number is Even!");
}

function handleOdd() {
    console.log("Number is Odd!");
}

handleNum(7, handleEven, handleOdd); 
handleNum(8, handleEven, handleOdd);