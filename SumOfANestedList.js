/*Implement a function to calculate the sum of the numerical values in a nested list. For example :

sumNested([1, [2, [3, [4]]]]) => 10*/

const flattenArray = arr => {
	const flattenedArray = [];

	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];

		if (Array.isArray(element)) {
			flattenedArray.push(...flattenArray(element));
		} else {
			flattenedArray.push(element);
		}
	}

	return flattenedArray;
};

const sumNested = arr => {
    let sum = 0;

    flattenArray(arr).forEach(number => {
        if (typeof number === 'number') {
            sum += number;
        }
    });

    return sum;
};

console.log(sumNested([[[[], [], [Array]], [], [], [[Array]]], []]));
