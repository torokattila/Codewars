/*Help Suzuki count his vegetables....

Suzuki is the master monk of his monastery so it is up to him to ensure the kitchen is 
operating at full capacity to feed his students and the villagers that come for lunch on a daily basis.

This week there was a problem with his deliveries and all the vegetables became mixed up. 
There are two important aspects of cooking in his kitchen, it must be done in harmony and nothing can be wasted. 
Since the monks are a record keeping people the first order of business is to sort the mixed up vegetables 
and then count them to ensure there is enough to feed all the students and villagers.

You will be given a string with the following vegetables:

"cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"
Return a list of tuples with the count of each vegetable in descending order. If there are any non vegetables 
mixed in discard them. If the count of two vegetables is the same sort in reverse alphabetical order (Z->A).

(119, "pepper"),
(114, "carrot"),
(113, "turnip"),
(102, "onion"),
(101, "tofu"),
(100, "cabbage"),
(93, "mushroom"),
(90, "cucumber"),
(88, "potato"),
(80, "celery")
*/

function countVegetables(string) {
  const vegetablesList = [
    'cabbage',
    'carrot',
    'celery',
    'cucumber',
    'mushroom',
    'onion',
    'pepper',
    'potato',
    'tofu',
    'turnip',
  ];
  const stringWords = string.split(' ');
  const countedVegetables = {};
  const countedVegetablesMatrix = [];

  stringWords.forEach((word) => {
    if (vegetablesList.includes(word)) {
      countedVegetables[word]
        ? countedVegetables[word]++
        : (countedVegetables[word] = 1);
    }
  });

  for (const key in countedVegetables) {
    countedVegetablesMatrix.push([countedVegetables[key], key]);
  }

  return countedVegetablesMatrix.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] < b[1]) return 1;
      if (a[1] > b[1]) return -1;
      return 0;
    } else {
      if (a[0] < b[0]) return 1;
      if (a[0] > b[0]) return -1;
      return 0;
    }
  });
}

console.log(
  countVegetables(
    'mushroom chopsticks chopsticks turnip mushroom carrot mushroom cabbage mushroom carrot tofu pepper cabbage potato cucumber mushroom mushroom mushroom potato turnip chopsticks cabbage celery celery turnip pepper chopsticks potato potato onion cabbage cucumber onion pepper onion cabbage potato tofu carrot cabbage cabbage turnip mushroom cabbage cabbage cucumber cabbage chopsticks turnip pepper onion pepper onion mushroom turnip carrot carrot tofu onion tofu chopsticks chopsticks chopsticks mushroom cucumber chopsticks carrot potato cabbage cabbage carrot mushroom chopsticks mushroom celery turnip onion carrot turnip cucumber carrot potato mushroom turnip mushroom cabbage tofu turnip turnip turnip mushroom tofu potato pepper turnip potato turnip celery carrot turnip'
  )
);
