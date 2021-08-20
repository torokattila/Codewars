/*Task
Create a method all which takes to params:

a sequence
a function (function pointer in C)
and returns true if the function in the params returns true for every element in the sequence. Otherwise, 
it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

Example
all((1, 2, 3, 4, 5), greater_than_9) -> false
all((1, 2, 3, 4, 5), less_than_9)    -> True*/

function all(arr, fun) {
	let result = true;

    arr.forEach(item => {
        if (!fun(item)) {
            result = false;
        }
    });

    return result;
}

console.log(
	all([1, 2, 3, 4, 5], function(v) {
		return v < 9;
	})
);
