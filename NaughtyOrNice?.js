/*In this kata, you will write a function that receives an array of string and returns a string that is either
 'naughty' or 'nice'. Strings that start with the letters b, f, or k are naughty. 
 Strings that start with the letters g, s, or n are nice. 
 Other strings are neither naughty nor nice.

If there is an equal amount of bad and good actions, return 'naughty'

Examples:

bad_actions = ['broke someone\'s window', 'fought over a toaster', 'killed a bug']
whatListAmIOn(bad_actions)
#-> 'naughty'
good_actions = ['got someone a new car', 'saved a man from drowning', 'never got into a fight']
what_list_am_i_on(good_actions)
#-> 'nice'
actions = ['broke a vending machine', 'never got into a fight', 'tied someone\'s shoes']
what_list_am_i_on(actions)
#-> 'naughty'
*/

function whatListAmIOn(actions) {
  let naughtyCounter = 0;
  let niceCounter = 0;
  const naughtyLetters = [...'bfk'];
  const niceLetters = [...'gsn'];

  actions.forEach((action) => {
    const firstChar = action.charAt(0);

    if (naughtyLetters.includes(firstChar)) naughtyCounter++;
    if (niceLetters.includes(firstChar)) niceCounter++;
  });

  return naughtyCounter === niceCounter || naughtyCounter > niceCounter
    ? 'naughty'
    : 'nice';
}

console.log(
  whatListAmIOn([
    "broke someone's window",
    'fought over a toaster',
    'killed a bug',
  ])
);
console.log(
  whatListAmIOn([
    'got someone a new car',
    'saved a man from drowning',
    'never got into a fight',
  ])
);
console.log(
  whatListAmIOn([
    'broke a vending machine',
    'never got into a fight',
    "tied someone's shoes",
  ])
);
