/*Write three functions add, subtract, and multiply such that each require two invocations.

For example:

add(3)(4)      // 7
subtract(3)(4) // -1
multiply(3)(4) // 12
Once you have done this. Write a function apply that takes one of these functions as an argument and invokes it.

For example:

apply(add)(3)(4)      // 7
apply(subtract)(3)(4) // -1
apply(multiply)(3)(4) // 12*/

function add(a) {
    return function (b) {
        return a + b;
    };
}

function subtract(a) {
    return function (b) {
        return a - b;
    };
}

function multiply(a) {
    return function (b) {
        return a * b;
    };
}

function apply(fn) {
    return fn;
}

console.log(add(3)(4));
console.log(subtract(3)(4));
console.log(multiply(3)(4));
console.log(apply(add)(3)(4));
console.log(apply(subtract)(3)(4));
console.log(apply(multiply)(3)(4));
