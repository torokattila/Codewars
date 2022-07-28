/*In computer science, a programming language is said to have first-class functions if it treats functions as first-class citizens. 
Specifically, this means the language supports passing functions as arguments to other functions, 
returning them as the values from other functions, and assigning them to variables or storing them in data structures.

First-class functions are a necessity for the functional programming style, in which the use of higher-order 
functions is a standard practice. A simple example of a higher-ordered function is the map function, which takes, 
as its arguments, a function and a list, and returns the list formed by applying the function to each member of the list. 
For a language to support map, it must support passing a function as an argument. 
See more on https://en.wikipedia.org/wiki/First-class_function

Your task is to rewrite your own map function which takes :

an array
a predicate function func which returns true (boolean) with even arguments
For example :

map([1,2,3,4],func)

produces

[ false, true, false, true ]  
The code also has to perform input validation, return :

'given argument is not a function' if func is not a function
'array should contain only numbers' if any elements are not numbers
*/

var func = function (item) {
  if (isNaN(Number(item))) return 'not a number';
  return Number(item) % 2 === 0;
};

function map(arr, somefunction) {
  if (typeof somefunction !== 'function')
    return 'given argument is not a function';

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === 'not a number') {
      return 'array should contain only numbers';
    } else {
      result.push(func(arr[i]));
    }
  }

  return result;
}

console.log(map([27, 18, 5, '8', '66'], func));
console.log(map([48, 33, 2, 1], 'str'));
console.log(map([8, 12, 't'], func));
