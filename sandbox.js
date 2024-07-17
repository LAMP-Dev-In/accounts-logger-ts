// explicit types
var character;
var age;
var isLoggedIn;
age = 30;
isLoggedIn = true;
// arrays
var ninjas = [];
ninjas.push('shaun');
// union types
var mixed = [];
mixed.push(20);
mixed.push('abc');
mixed.push(false);
console.log(mixed);
var uid;
uid = 'abc';
uid = 123;
console.log(uid);
// objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 20 };
var ninjaTwo;
ninjaTwo = {
    name: 'mario',
    age: 20,
    beltColour: 'green'
};
console.log(ninjaTwo);
