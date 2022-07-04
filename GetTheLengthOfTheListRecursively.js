/*Write funcion lenR which returns the length of a given list. Try no to cheat and provide recursive solution.*/

function lenR(x) {
    x = [...x];
    return 0 in x ? 1 + lenR(x.slice(1)) : 0;
}

console.log(lenR([1, 2, 3, 4, 5]));
console.log(lenR([0, 2]));
