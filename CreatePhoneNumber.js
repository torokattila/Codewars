String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

function createPhoneNumber(numbers) {
    let numberString = '';

    for (let i = 0; i < numbers.length; i++) {
        numberString += numbers[i].toString();
    }

    numberString = numberString.splice(0, 0, "(");
    numberString = numberString.splice(4, 0, ") ");
    numberString = numberString.splice(9, 0, "-");

    return numberString;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));