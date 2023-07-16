/*
Converting a normal (12-hour) time like "8:30 am" or "8:30 pm" to 24-hour time (like "0830" or "2030") sounds easy enough, 
right? Well, let's see if you can do it!

You will have to define a function named "to24hourtime", and you will be given an hour (always in the range of 1 to 12, inclusive), 
a minute (always in the range of 0 to 59, inclusive), and a period (either "am" or "pm") as input.

Your task is to return a four-digit string that encodes that time in 24-hour time.
*/

const PM_HOUR_CONVERSIONS = {
  1: 13,
  2: 14,
  3: 15,
  4: 16,
  5: 17,
  6: 18,
  7: 19,
  8: 20,
  9: 21,
  10: 22,
  11: 23,
  12: 12,
};

function to24hourtime(hour, minute, period) {
  const extendedMinutes = minute < 10 ? '0' + minute : minute;
  const extendedHours = hour < 10 ? '0' + hour : hour;

  if (period === 'am') {
    if (hour === 12) {
      return `00${extendedMinutes}`;
    } else {
      return `${extendedHours}${extendedMinutes}`;
    }
  } else if (period === 'pm') {
    return `${PM_HOUR_CONVERSIONS[hour]}${extendedMinutes}`;
  }
}

console.log(to24hourtime(1, 0, 'am'));
console.log(to24hourtime(1, 0, 'pm'));
console.log(to24hourtime(12, 0, 'am'));
console.log(to24hourtime(12, 0, 'pm'));
console.log(to24hourtime(6, 30, 'am'));
console.log(to24hourtime(9, 45, 'pm'));
