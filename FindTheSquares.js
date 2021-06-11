/*You are to write a function that takes an odd integer which is the difference between two consecutive perfect squares and find the squares

Input Format
num : Odd Integer 0<n<1000000

Output Format
Answer: String containing the bigger and smaller squares in one line like "Max-Min"

Examples
findSquares(9)  //returns '25-16'
findSquares(5)  // returns '9-4' */

const findSquares = num => {
	const perfectSquaresArray = [];
    const subtractArray = [];

    for (let i = 1; i <= num; i++) {
        if (Math.sqrt(Math.pow(i, 2)) % 1 === 0) {
            perfectSquaresArray.push(Math.pow(i, 2));
        }
    }

    for (let i = 0; i < perfectSquaresArray.length; i++) {
        if (perfectSquaresArray[i] - perfectSquaresArray[i - 1] == num) {
            subtractArray.push(perfectSquaresArray[i]);
            subtractArray.push(perfectSquaresArray[i - 1]);
        }
    }

    return `${subtractArray[0]}-${subtractArray[1]}`;
};

console.log(findSquares(9));
