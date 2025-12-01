function countdown(num){
    console.log(num);

    if (num <= 0) {
        return;
    } else {
        return countdown(num-1);
    }
}

countdown(5);