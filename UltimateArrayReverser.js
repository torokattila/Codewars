/*Given an array of strings, reverse them and their order in such way that their length stays the same as 
the length of the original inputs.

Example:
Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}*/

const ultimateReverse = (s) => {
  const result = [];
  const reversedString = [...s.join('')].reverse().join('');
  const length = s.length;
  let createdWord = '';
  let currentPosition = 0;

  for (let i = 0; i < length; i++) {
    if (i === 0) {
      createdWord = reversedString.substr(i, s[i].length);
    } else {
      createdWord = reversedString.substring(
        currentPosition,
        currentPosition + s[i].length
      );
    }
    result.push(createdWord);
    currentPosition += s[i].length;
  }

  return result;
};

console.log(
  ultimateReverse(['I', 'like', 'big', 'butts', 'and', 'I', 'cannot', 'lie!'])
);
