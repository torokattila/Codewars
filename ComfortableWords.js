/*A comfortable word is a word which you can type always alternating the hand you type with (assuming you type using a QWERTY keyboard and use fingers as shown in the image below).

That being said, complete the function which receives a word and returns true if it's a comfortable word and false otherwise.

The word will always be a string consisting of only ascii letters from a to z.

https://imgur.com/1I7Uuc5

To avoid problems with image availability, here's the lists of letters for each hand:

Left: q, w, e, r, t, a, s, d, f, g, z, x, c, v, b
Right: y, u, i, o, p, h, j, k, l, n, m
Examples
"yams"  -->  true
"test"  -->  false
*/

const LEFT = [...'qwertasdfgzxcvb'];
const RIGHT = [...'yuiophjklnm'];

const comfortableWord = (word) => {
  let result = true;
  const hands = [];

  [...word].forEach((char) => {
    if (LEFT.includes(char)) hands.push('left');
    if (RIGHT.includes(char)) hands.push('right');
  });

  const length = hands.length;

  for (let i = 0; i < length; i++) {
    if (i > 0) {
      if (
        (hands[i] === 'left' && hands[i - 1] === 'left') ||
        (hands[i] === 'right' && hands[i - 1] === 'right')
      ) {
        result = false;
      }
    }
  }

  return result;
};

console.log(comfortableWord('yams'));
console.log(comfortableWord('test'));
