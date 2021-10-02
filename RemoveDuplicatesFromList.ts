"use strict";

/*Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.*/

export const distinct = (a: number[]): number[] => {
	const resultArray: number[] = [];
    
    a.forEach(number => {
        if (resultArray.indexOf(number) === -1) {
            resultArray.push(number);
        }
    });

    return resultArray;
};

console.log(distinct([1, 1, 2]));
