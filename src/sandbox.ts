let greet: Function;


//greet = 'hello';

greet = () => {
    console.log('Hello Gtm!');
}

greet();

const add = (a: number, b: number, c: number | string = 12): void => {
    console.log(a + b);
    console.log(c);
}

add(2, 8, 'KLM');


const minus = (a: number, b:number) => {
    return (a - b);
}

let result = minus(10, 7);

console.log(result);

