/*Complete the solution so that it returns true if it contains any duplicate argument values. 
Any number of arguments may be passed into the function.

The array values passed in will only be strings or numbers. The only valid return values are true and false.

Examples:

solution(1, 2, 3)             -->  false
solution(1, 2, 3, 2)          -->  true
solution('1', '2', '3', '2')  -->  true*/

function solution() {
	const array = [...arguments];
	const occurrences = new Map();

	array.forEach(item => {
        let counter = 1;
		if (occurrences.has(item)) {
            counter++;
            occurrences.set(item, counter);
        } else {
            occurrences.set(item, counter);
        }
	});

	return [...occurrences.values()].includes(2);
}

console.log(solution(1, 2, 3, 2));