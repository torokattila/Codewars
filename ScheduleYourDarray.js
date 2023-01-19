/*
SCHEDULE YOUR DA(RRA)Y

The best way to have a productive day is to plan out your work schedule. Given the following three inputs, 
please create an an array of time alloted to work, broken up with time alloted with breaks:

Input 1: Hours - Number of hours available to you to get your work done!
Input 2: Tasks - How many tasks you have to do througout the day
Input 3: Duration (minutes)- How long each of your tasks will take to complete

Criteria to bear in mind:

Your schedule should start with work and end with work.
It should also be in minutes, rounded to the nearest whole minute.
If your work is going to take more time than you have, return "You're not sleeping tonight!"
Example:

dayPlan(8, 5, 30) == [ 30, 83, 30, 83, 30, 83, 30, 83, 30 ]
dayPlan(3, 5, 60) == "You're not sleeping tonight!"
*/

function dayPlan(hours, tasks, duration) {
  const result = [];
  const hoursInMinutes = hours * 60;
  const tasksWithDurationInMinutes = tasks * duration;

  if (tasksWithDurationInMinutes > hoursInMinutes)
    return "You're not sleeping tonight!";

  const works = Array.from({ length: tasks }, () => duration);
  const breakInMinute = Math.round(
    (hoursInMinutes - tasksWithDurationInMinutes) / (tasks - 1)
  );
  const breaks = Array.from({ length: tasks - 1 }, () => breakInMinute);
  const length = Math.max(works.length, breaks.length);

  for (let i = 0; i < length; i++) {
    result.push(works[i], breaks[i]);
  }

  return result.filter((item) => item !== undefined);
}

console.log(dayPlan(8, 5, 30));
console.log(dayPlan(2, 2, 60));
console.log(dayPlan(3, 5, 60));
