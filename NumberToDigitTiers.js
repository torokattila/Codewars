/*Create a function that takes a number and returns an array of strings containing the number cut off at 
each digit.*/

function createArrayOfTiers(num) {
    let resultArray = [];
    const numChars = num.toString().split('');
    let characters = '';

    for (let i = 0; i < numChars.length; i++) {
        characters += numChars[i];

        resultArray.push(characters);
    }

    return resultArray;
}

console.log(createArrayOfTiers(2017));