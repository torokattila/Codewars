/*Get the number n to return the sequence from n to 1. The number n can be negative and also large number. 
(See the range as the following)

Example : 
n=5  >> [5,4,3,2,1]
n=-1 >> [-1,0,1]

Range :
Python     -9999 < n < 9999
Javascript -9999 < n < 9999
c++        -9999 < n < 9999
Crystal    -9999 < n < 9999
Ruby       -9999 < n < 9999
*/

const negativeSequence = (num) => {
    const result = [];

    for (let i = num; i <= 1; i++) {
        result.push(i);
    }

    return result;
};

const positiveSequence = (num) => {
    const result = [];

    for (let i = num; i >= 1; i--) {
        result.push(i);
    }

    return result;
};

function seqToOne(n) {
    if (n === 1) return [1];

    return n <= 0 ? negativeSequence(n) : positiveSequence(n);
}

console.log(seqToOne(5));
console.log(seqToOne(1));
console.log(seqToOne(0));
console.log(seqToOne(-1));
