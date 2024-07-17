// explicit types
let character: string;

let age: number;

let isLoggedIn: boolean;

age = 30;

isLoggedIn = true;


// arrays
let ninjas: string[] = [];
ninjas.push('shaun');


// union types
let mixed: (boolean|string|number)[] = [];
mixed.push(20);
mixed.push('abc');
mixed.push(false);

console.log(mixed);


let uid: string| number;
uid = 'abc';
uid = 123;

console.log(uid);



// objects
let ninjaOne: object;
ninjaOne = {name: 'yoshi', age: 20};

let  ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
};

ninjaTwo = {
    name: 'mario',
    age: 20,
    beltColour: 'green'
}

console.log(ninjaTwo);


