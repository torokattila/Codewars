/*Given Two integers a , b , find The sum of them , BUT You are not allowed to use the operators + and -*/

function add(x, y) {
    if (y == 0) {
        return x;
    } else {
        return add(x ^ y, (x & y) << 1);
    }
}

console.log(add(3, 4));