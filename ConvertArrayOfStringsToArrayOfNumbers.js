/*Some really funny web dev gave you an array of numbers from his API response as an array of strings!

You need to cast the whole array to the correct type.
Create the function that takes as a parameter an array of numbers represented as strings and outputs an array of numbers.*/

function toNumberArray(stringarray) {
    return stringarray.map(number => {
        if (number.includes('.')) {
            number = parseFloat(number);
        } else {
            number = parseInt(number);
        }

        return number;
    });
}

console.log(toNumberArray(["1.1", "2.2", "3.3"]));