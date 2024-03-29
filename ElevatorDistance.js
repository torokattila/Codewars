/*Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. 
You have travelled a total of 3 + 6 = 9 floors of distance.

Given an array representing a series of floors you must reach by elevator, 
return an integer representing the total distance travelled for visiting each floor in the array in order.

// simple examples
elevatorDistance([5,2,8]) = 9
elevatorDistance([1,2,3]) = 2
elevatorDistance([7,1,7,1]) = 18

// if two consecutive floors are the same,
//distance travelled between them is 0
elevatorDistance([3,3]) = 0
Array will always contain at least 2 floors. Random tests will contain 2-20 elements in array, 
and floor values between 0 and 30.
*/

function elevatorDistance(array) {
	let sum = 0;

	for (let i = 0, length = array.length; i < length; i++) {
        if (i >= 1) {
            if (array[i] - array[i - 1] === 0) {
                sum += 0;
            }
    
            if (array[i] - array[i - 1] < 0) {
                sum += array[i - 1] - array[i];
            } else {
                sum += array[i] - array[i - 1];
            }
        }
	}

	return sum;
}

console.log(elevatorDistance([7, 1, 7, 1]));
