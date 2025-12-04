const users = [
    {name: 'Alice', age: 22, email: 'alice@email.com'},
    {name: 'John', age: 31, email: 'john@email.com'},
    {name: 'Peter', age: 45, email: 'peter@email.com'},
];

for (const {name, age, email} of users) {
    console.log(`${name} is ${age} year old and has email - ${email}`);
}