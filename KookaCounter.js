/*A family of kookaburras are in my backyard.

I can't see them all, but I can hear them!

How many kookaburras are there?

The trick to counting kookaburras is to listen carefully

The males sound like HaHaHa...

The females sound like hahaha...

And they always alternate male/female

Examples
ha = female => 1
Ha = male => 1
Haha = male + female => 2
haHa = female + male => 2
hahahahaha = female => 1
hahahahahaHaHaHa = female + male => 2
HaHaHahahaHaHa = male + female + male => 3
*/

const kookaCounter = (laughing) => {
  if (!laughing.length) return 0;
  let femaleCounter = 0;
  let maleCounter = 0;
  let isFemale = false;
  let isMale = false;
  const splitBy2Chars = laughing.match(/.{1,2}/g);

  splitBy2Chars.forEach((laugh) => {
    if (laugh === 'Ha' && !isMale) {
      isMale = true;
      maleCounter++;
    } else if (laugh === 'ha' && !isFemale) {
      isFemale = true;
      femaleCounter++;
    } else if (laugh === 'Ha' && isFemale) {
      isFemale = false;
    } else if (laugh === 'ha' && isMale) {
      isMale = false;
    }
  });

  return maleCounter + femaleCounter;
};

console.log(kookaCounter('Haha'));
console.log(kookaCounter('haHa'));
console.log(kookaCounter('hahahahaha'));
console.log(kookaCounter('hahahahahaHaHaHa'));
console.log(kookaCounter('HaHaHahahaHaHa'));
