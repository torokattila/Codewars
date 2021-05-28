/*You have to create a function named reverseIt.

Write your function so that in the case a string or a number is passed in as the data , 
you will return the data in reverse order. If the data is any other type, return it as it is.

Examples of inputs and subsequent outputs:

"Hello" -> "olleH"

"314159" -> "951413"

[1,2,3] -> [1,2,3]*/

function reverseIt(data) {
    if (typeof data != 'number' && typeof data != 'string') {
        return data;
    } else {
        let resultString = '';
        const dataString = data.toString();

        for (let i = dataString.length - 1; i >= 0; i--) {
            resultString += dataString[i];
        }

        return typeof data == 'number' ? Number(resultString) : resultString;
    }
}

console.log(reverseIt(314159));