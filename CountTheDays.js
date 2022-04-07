/*Little Annie is very excited for upcoming events. She wants to know how many days she has to wait for a specific event.

Your job is to help her out.

Task: Write a function which returns the number of days from today till the given date. 
The function will take a Date object as parameter. You have to round the amount of days.

If the event is in the past, return "The day is in the past!"
If the event is today, return "Today is the day!"
Else, return "x days"*/

function countDays(d) {
    const input = d;
    const today = new Date();
    if (
        `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}` ===
        `${input.getFullYear()}-${input.getMonth()}-${input.getDate()}`
    )
        return 'Today is the day!';
    if (input < today) return 'The day is in the past!';
    const oneDay = 1000 * 3600 * 24;
    const diffs = Math.abs(input.getTime() - today.getTime());

    return `${Math.round(diffs / oneDay)} days`;
}

console.log(countDays(new Date('April 7, 2022')));
