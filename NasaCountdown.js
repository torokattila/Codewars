/*You have the job to implement a countdown function that will be used for the next NASA spatial mission. 
The function takes a duration in milliseconds and return a string in countdown format.

If it's counting down, the first character should be '-', if it's counting up it should be '+'. 
Then it should return the number of: hours (min 2 units), minutes (2 units) and seconds (2 units).

countdown(-154800000)  // return  '-43:00:00'
countdown(0)           // return  '+00:00:00'
countdown(61000)       // return  '+00:01:01'
countdown(360000000)   // return '+100:00:00'*/

const padTo2Digits = (number) => {
    return number.toString().padStart(2, '0');
};

function countdown(millisecs) {
    if (millisecs === 0) return '+00:00:00';
    let seconds = Math.floor(Math.abs(millisecs) / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    let prefix = millisecs > 0 ? '+' : '-';

    return `${prefix}${padTo2Digits(hours)}:${padTo2Digits(
        minutes
    )}:${padTo2Digits(seconds)}`;
}

console.log(countdown(-169687000));
