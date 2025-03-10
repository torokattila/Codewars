/*
Most Frequent Weekdays

What is your favourite day of the week? Check if it's the most frequent day of the week in the year.

You are given a year as integer (e. g. 2001). You should return the most frequent day(s) of the week in that year. 
The result has to be a list of days sorted by the order of days in week (e. g. ['Monday', 'Tuesday'], ['Saturday', 'Sunday'], 
['Monday', 'Sunday']). Week starts with Monday.

Input: Year as an int.

Output: The list of most frequent days sorted by the order of days in week (from Monday to Sunday).

Preconditions:

Week starts on Monday.
Year is between 1583 and 4000.
Calendar is Gregorian.
Examples (input -> output):
* 2427 -> ['Friday']
* 2185 -> ['Saturday']
* 2860 -> ['Thursday', 'Friday']
*/

export function mostFrequentDays(year: number): string[] {
  const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  // get the first and last days of the year
  const firstDay = new Date(year, 0, 1).getDay();
  const lastDay = new Date(year, 11, 31).getDay();

  // adjust sunday from 0 to 7 for correct sorting
  const start = firstDay === 0 ? 7 : firstDay;
  const end = lastDay === 0 ? 7 : lastDay;

  const result =
    start === end
      ? [weekdays[start - 1]]
      : [weekdays[start - 1], weekdays[end - 1]];

  return result.sort((a, b) => weekdays.indexOf(a) - weekdays.indexOf(b));
}

console.log(mostFrequentDays(2427));
console.log(mostFrequentDays(2185));
console.log(mostFrequentDays(2860));
