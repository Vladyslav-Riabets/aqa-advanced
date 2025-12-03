const person = {
    firstName:'John',
    lastName: 'Smith',
    age: 30
};

person.email = 'test@email.com';

delete person.age;

console.log(person);