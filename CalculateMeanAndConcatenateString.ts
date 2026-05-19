/*
You will be given an array which will include both integers and characters.

Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number. 
There will always be 10 integers and 10 characters. Create a single string with the characters and 
return it as a[1] while maintaining the original order.

lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']
Here is an example of your return

[3.6, "udiwstagwo"]
*/

export function mean(lst: string[]): [number, string] {
  const result: [number, string] = [0, ''];
  let sum = 0;
  let count = 0;

  for (const item of lst) {
    const num = parseInt(item, 10);
    if (!isNaN(num)) {
      sum += num;
      count++;
    } else {
      result[1] += item;
    }
  }

  result[0] = sum / count;
  return result;
}

console.log(
  mean([
    'u',
    '6',
    'd',
    '1',
    'i',
    'w',
    '6',
    's',
    't',
    '4',
    'a',
    '6',
    'g',
    '1',
    '2',
    'w',
    '8',
    'o',
    '2',
    '0',
  ]),
);
console.log(
  mean([
    '0',
    'c',
    '7',
    'x',
    '6',
    '2',
    '3',
    '5',
    'w',
    '7',
    '0',
    'y',
    'v',
    'u',
    'h',
    'i',
    'n',
    'u',
    '0',
    '0',
  ]),
);
