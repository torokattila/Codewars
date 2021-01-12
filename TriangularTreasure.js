/*Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out 
as dots. i.e.

1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
You need to return the nth triangular number. You should return 0 for out of range values:

  triangular(0)==0,
  triangular(2)==3,
  triangular(3)==6,
  triangular(-10)==0*/


function triangular(n) {
    let result = 0;

    if (n <= 0) {
        return 0;
    } else {
        for (let i = n - 1; i >= 0; i--) {
            result++;
            for (let j = i; j > 0; j--) {
                result++;
            }
        }

        return result;
    }
}

console.log(triangular(4));
