/*Did you ever want to know how many days old are you? Complete the function which returns your age in days. The birthday is given in the following order: year, month, day.

For example if today is 30 November 2015 then

ageInDays(2015, 11, 1) returns "You are 29 days old"
The birthday is expected to be in the past.

Suggestions on how to improve the kata are welcome!*/

function ageInDays(year, month, day) {
    const paramDate = new Date(`${month}/${day + 1}/${year}`);
    const todaysDay = new Date().getDate() + 1;
    const todaysMonth = new Date().getMonth() + 1;
    const todaysYear = new Date().getFullYear();
    const todaysDate = new Date(`${todaysMonth}/${todaysDay}/${todaysYear}`);
    const diffTime = Math.abs(todaysDate - paramDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return `You are ${diffDays} days old`;
}

console.log(ageInDays(2021, 1, 3));