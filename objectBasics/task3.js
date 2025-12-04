const car1 = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2018
};

const car2 = {
    brand: 'Volkswagen',
    model: 'Touareg',
    owner: 'Vladyslav'
};

const car3 = {...car1, ...car2};

console.log(car3);