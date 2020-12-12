/*Write a function that takes an integer and returns an array [A, B, C], where A is the number of 
multiples of 3 (but not 5) below the given integer, B is the number of multiples of 5 (but not 3) below 
the given integer and C is the number of multiples of 3 and 5 below the given integer.*/

function solution(number) {
    let multiplyBy3Counter = 0;
    let multiplyBy5Counter = 0;
    let multipleBy3And5Counter = 0;

    for (let i = 1; i < number; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            multipleBy3And5Counter++;
        } else if (i % 3 == 0) {
            multiplyBy3Counter++;
        } else if (i % 5 == 0) {
            multiplyBy5Counter++;
        }
    }

    return [multiplyBy3Counter, multiplyBy5Counter, multipleBy3And5Counter];
}

console.log(solution(20));