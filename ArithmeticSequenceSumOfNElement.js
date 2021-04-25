/*In your class, you have started lessons about "arithmetic progression". Because you are also a 
programmer, you have decided to write a function.

This function, arithmetic_sequence_sum(a, r, n), should return the sum of the first (n) elements of a 
sequence in which each element is the sum of the given integer (a), and a number of occurences of the 
given integer (r), based on the element's position within the sequence.

For example:

arithmetic_sequence_sum(2, 3, 5) should return 40:

1     2        3          4            5
a + (a+r) + (a+r+r) + (a+r+r+r) + (a+r+r+r+r) 
2 + (2+3) + (2+3+3) + (2+3+3+3) + (2+3+3+3+3) = 40*/

function ArithmeticSequenceSum(a, r, n) {
    if (n == 1) {
        return a;
    }
    
    let sum = a;
    let subSum = (a + r);
    sum += subSum;

    for (let i = 3; i <= n; i++) {
        subSum += r;
        sum += subSum;
    }

    return sum;
}

console.log(ArithmeticSequenceSum(1, -2, 10));