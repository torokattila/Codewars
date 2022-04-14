/*This kata requires you to convert minutes (int) to hours and minutes in the format hh:mm (string).

If the input is 0 or negative value, then you should return "00:00"

Hint: use the modulo operation to solve this challenge. The modulo operation simply returns the remainder after a division. 
For example the remainder of 5 / 2 is 1, so 5 modulo 2 is 1.

Example
If the input is 78, then you should return "01:18", because 78 minutes converts to 1 hour and 18 minutes.*/

function timeConvert(num) {
    if (num === 0 || num < 0) return '00:00';
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    if (num > 60 && hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes === 0) {
        minutes = '00';
    } else if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return num < 60 ? `00:${minutes}` : `${hours}:${minutes}`;
}

console.log(timeConvert(153));
