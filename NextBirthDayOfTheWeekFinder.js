/*Can you find after how many years will a person's birthday fall on the same day of the week that he was born?

For example, Joy's birthday is on 16th October, 1990 which falls on Friday. After how many years will his birthday fall on Friday again? (That would be 11 years)

Note
Month is zero-indexed

nextBirthdayOfTheWeek(new Date(1990, 9, 16)) //11
nextBirthdayOfTheWeek(new Date(2012, 5, 20))  //6
nextBirthdayOfTheWeek(new Date(1975, 2, 22))  //5
*/

const nextBirthdayOfTheWeek = (birthday) => {
  let counter = 0;

  let year = birthday.getFullYear() + 1;
  let month = birthday.getMonth();
  let day = birthday.getDate();
  let newDate = new Date(year, month, day);

  while (newDate.getDay() !== birthday.getDay()) {
    newDate.setFullYear(year);
    year++;
    counter++;
  }

  return counter;
};

console.log(nextBirthdayOfTheWeek(new Date(1990, 9, 16)));
console.log(nextBirthdayOfTheWeek(new Date(2012, 5, 20)));
console.log(nextBirthdayOfTheWeek(new Date(1975, 2, 22)));
