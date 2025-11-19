function checkOrder (available, ordered) {
    if (available < ordered) {
        return 'Your order is too large, we don`t have enough goods';
    }

    if (ordered === 0) {
        return 'Your order is empty';
    } 

    return 'Your order is accepted';
}

// Cases to check each condition
const firstCase = checkOrder(10, 12);
const secondCase = checkOrder(10, 0);
const thirdCase = checkOrder(10, 7);

console.log(firstCase);
console.log(secondCase);
console.log(thirdCase);

