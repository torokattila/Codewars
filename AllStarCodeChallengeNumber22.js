/*Create a function called toTime() that takes an integer argument of seconds and converts the value 
into a string describing how many hours and minutes comprise that many seconds.*/

function toTime(seconds) {
    let resultString = '';

    if (seconds == 0) {
        resultString += '0 hour(s) and 0 minute(s)';
    } else if (seconds < 3600) {
        resultString += `0 hour(s) and ${Math.round(seconds / 60)} minute(s)`;
    } else {
        let hours = 0;
        let minutes = 0;

        hours = Math.floor(seconds / 3600);
        minutes = Math.floor((seconds % 3600) / 60);
        resultString += `${hours} hour(s) and ${minutes} minute(s)`;
    }

    return resultString;
}

console.log(toTime(323500))