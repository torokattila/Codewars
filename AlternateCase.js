/*Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD*/

function alternateCase(s) {
  return [...s]
    .map((char) => {
      if (char.toUpperCase() === char) {
        char = char.toLowerCase();
      } else if (char.toLowerCase() === char) {
        char = char.toUpperCase();
      }

      return char;
    })
    .join('');
}

console.log(alternateCase('Hello World'));
