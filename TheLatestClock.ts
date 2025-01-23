/*
The latest clock

Write a function which receives 4 digits and returns the latest time of day that can be built with those digits.
The time should be in HH:MM format.

Examples:
digits: 1, 9, 8, 3 => result: "19:38"
digits: 9, 1, 2, 5 => result: "21:59" (19:25 is also a valid time, but 21:59 is later)
Notes
Result should be a valid 24-hour time, between 00:00 and 23:59.
Only inputs which have valid answers are tested.
*/

export function latestClock(
  a: number,
  b: number,
  c: number,
  d: number
): string {
  const allPermutations = getPermutations([a, b, c, d]);
  const validTimes = getValidTimes(allPermutations);
  const latestTime = validTimes.sort(
    (a, b) => b.hours * 60 + b.minutes - (a.hours * 60 + a.minutes)
  )[0];

  return latestTime
    ? `${String(latestTime.hours).padStart(2, '0')}:${String(
        latestTime.minutes
      ).padStart(2, '0')}`
    : '00:00';
}

function getPermutations(nums: number[]): number[][] {
  if (nums.length === 1) return [nums];

  const result: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const remaining = nums.slice(0, i).concat(nums.slice(i + 1));
    const permutations = getPermutations(remaining);

    for (const permutation of permutations) {
      result.push([current, ...permutation]);
    }
  }

  return result;
}

function getValidTimes(nums: number[][]): {
  hours: number;
  minutes: number;
}[] {
  return nums
    .map(([hour1, hour2, minute1, minute2]) => {
      const hours = hour1 * 10 + hour2;
      const minutes = minute1 * 10 + minute2;
      return { hours, minutes };
    })
    .filter(({ hours, minutes }) => hours < 24 && minutes < 60);
}

console.log(latestClock(1, 9, 8, 3));
console.log(latestClock(9, 1, 2, 5));
