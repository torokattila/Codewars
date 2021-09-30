/*Array Exchange and Reversing

It's time for some array exchange! The objective is simple: exchange the elements of two arrays in-place in a way that their new content is also reversed.

// before
const myArray = ['a', 'b', 'c'];
const otherArray = [1, 2, 3];

exchangeWith(myArray, otherArray);

// after
myArray => [3, 2, 1]
otherArray => ['c', 'b', 'a']*/

function exchangeWith(a, b) {
	const aLength = a.length;
	const bLength = b.length;

	for (let i = 0; i < aLength; i++) {
		b.splice(i, 0, a.pop());
	}

    for (let i = 0; i < bLength; i++) {
        a.splice(i, 0, b.pop());
    }
}

const myArray = ['a', 'b', 'c'];
const otherArray = [1, 2, 3];

console.log(exchangeWith(myArray, otherArray));
