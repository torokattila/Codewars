/*PUZZLE #1. SUM

Assignment:

Write a function named sum which performs addition in the way shown below

sum(4)(5)(9)(); // => 18
sum(5)();       // => 5
sum();          // => 0
```ruby sum(4).(5).(9).() #=> 18 sum(5).() #=> 5 sum() #=> 0

NOTE: Pay attention that last brackets are left empty to indicate end of operations*/

function sum(numberOne) {
    if (arguments.length == 0) {
        return 0;
    } else {
        let count = numberOne;
        return function resultFunction(numberTwo) {
            if (numberTwo === undefined) {
                return count;
            } else {
                count += numberTwo;
                return resultFunction;
            }
        }
    }
}

console.log(sum());