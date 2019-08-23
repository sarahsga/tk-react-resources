/*

    following is ES6 code. Run it in https://babeljs.io/repl and see it transpile into older version javascript

    Topics:
    - let and const
    - backtick strings
    - arrow functions

*/

let a = 2;
const b = 4;
console.log(`Value of a is ${a} and the value of b is ${b}`);

let sayHello = function() {
    console.log("Hello World!");
}

let sayHello2 = () => {
    console.log("Hello World");
}

let printNumb = function(numb) {
    console.log(numb);
}

let printNumb2 = (numb) => {
    console.log(numb);
}

let printNumb3 = numb => {
    console.log(numb);
}

let getSum = function(numb1, numb2) {
    return numb1 + numb2;
}

let getSum2 = (numb1, numb2) => {
    return numb1 + numb2;
}

let getSum3 = (numb1, numb2) => numb1 + numb2;

let doSomething = function(numb) {
    let a = numb + 2;
    let b = a * numb;
    return a + b;
}

let doSomething = numb => {
    let a = numb + 2;
    let b = a * numb;
    return a + b;
}