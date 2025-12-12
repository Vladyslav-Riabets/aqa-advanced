function printInfoTimer(text, ms) {
  setTimeout(() => {
    console.log(text);
  }, ms);
}

printInfoTimer("This is timer test", 3000);
