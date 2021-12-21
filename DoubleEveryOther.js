/*Write a function that doubles every second integer in a list starting from the left.

Example:

doubleEveryOther([1,2,3,4]) => [ 1, 4, 3, 8 ]*/

function doubleEveryOther(a) {
	return a.map((number, index) => {
        if (index % 2 !== 0) {
            number = number * 2;
        }

        return number;
    });
}

console.log(doubleEveryOther([1, 2, 3, 4]));
