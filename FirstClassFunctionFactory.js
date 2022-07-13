/*The returned function should take an array of numbers as its parameter, and return an array of 
those numbers multiplied by the number that was passed into the first function.

In the example below, 5 is the number passed into the first function. 
So it returns a function that takes an array and multiplies all elements in it by five.

Translations and comments (and upvotes) welcome!

Example
var fives = factory(5);       // returns a function - fives
var myArray = [1, 2, 3];
fives(myArray);    
*/

function factory(x) {
    if (typeof x === 'number') {
        return function (y) {
            return y.map((num) => num * x);
        };
    }
}

const fives = factory(5);
const myArray = [1, 2, 3];
console.log(fives(myArray));
