/*
Hello, my name is Anna, and I'm the director of elementary school. 
Every month I accept applications for schooling from new guys and when I process it manually, 
I get a little tired. Сould you help me and automate this process?

If so, you have information about the ages of all these new pupils (array of ages - only positive digital numbers). 
Your goal is to sort sort these ages by grade. Your function schoolSelection needs to return an object where key is 
grade level and value is a number of convenient ages.

Additional information:

Level           -> age

Kindergarten     -> 5
1st grade        -> 6
2nd grade        -> 7
3rd grade        -> 8
4th grade        -> 9
Example:

schoolSelection([5, 7, 4, 9, 10, 5, 15, 9, 5])

Output: 
{
  'Kindergarten': 3,
  '1st grade': 0,
  '2nd grade': 1, 
  '3rd grade': 0, 
  '4th grade': 2,
}
*/

const SELECTION = {
  kindergarten: 5,
  first: 6,
  second: 7,
  third: 8,
  fourth: 9,
};

function schoolSelection(array) {
  const result = {
    Kindergarten: 0,
    '1st grade': 0,
    '2nd grade': 0,
    '3rd grade': 0,
    '4th grade': 0,
  };

  array.forEach((age) => {
    if (age === SELECTION.kindergarten) result['Kindergarten']++;
    if (age === SELECTION.first) result['1st grade']++;
    if (age === SELECTION.second) result['2nd grade']++;
    if (age === SELECTION.third) result['3rd grade']++;
    if (age === SELECTION.fourth) result['4th grade']++;
  });

  return result;
}

console.log(schoolSelection([5, 7, 4, 9, 10, 5, 15, 9, 5]));
console.log(schoolSelection([5, 5, 5, 6, 6, 60, 6, 666, 9]));
