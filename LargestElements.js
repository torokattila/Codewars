/*Write a program that outputs the n largest elements from a list.*/

function largest(n, xs) {
    return n != 0 ? xs.sort((a, b) => a - b).slice(-n) : [];
}

console.log(largest(2, [7, 6, 5, 4, 3, 2, 1]));