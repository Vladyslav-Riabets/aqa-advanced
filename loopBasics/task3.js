const number = 5;

console.log (`=== Таблиця множення для ${number} через for ===`)
for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}

console.log (`=== Таблиця множення для ${number} через while ===`)
let n = 1;
while (n <= 10) {
    console.log(`${number} * ${n} = ${number * n}`);
    n++;
}