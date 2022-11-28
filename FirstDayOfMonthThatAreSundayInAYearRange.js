/*
You will write a function that receive 2 parameters, 2 different years, to indicate a range of time.

The function will return the number of times a month between those years begin on Sunday, meaning the 1st day of the month is Sunday.

If there is only one year provided, return the number of times a month begin on Sunday on that year.

For instance: between 1901 and 2000, a month began on Sunday 171 times.
*/

function getTotalSundays(yearInit, yearEnd) {
  let sundayCounter = 0;
  const months = yearEnd ? (yearEnd - yearInit + 1) * 12 : 12;

  for (let month = 0; month < months; month++) {
    let date = new Date(yearInit, month, 1);
    if (date.getDay() === 0) sundayCounter++;
  }

  return sundayCounter;
}

console.log(getTotalSundays(1901, 2000));
console.log(getTotalSundays(1991, 2017));
console.log(getTotalSundays(1991));
console.log(getTotalSundays(2017));
