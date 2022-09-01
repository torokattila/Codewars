/*I'm creating a scoreboard on my game website, but I want the score to be displayed as tally marks instead of Roman numerals. 
Write a function that translates the numeric score into tally marks.

My tally mark font uses the letters a, b, c, d, e to represent tally marks for 1, 2, 3, 4, 5, respectively. 
I want a space and line break ( ) after each completed tally (5).

Assume that the score you receive will be an integer. This function should return an HTML 
string that I can insert into my website that represents the correct score.
*/

const CHANGE = {
  1: 'a',
  2: 'b',
  3: 'c',
  4: 'd',
  5: 'e',
};

function scoreToTally(score) {
  if (score <= 4) return CHANGE[score];
  const dividedByFive = Math.floor(score / 5);
  const remainder = score % 5;

  return `${'e <br>'.repeat(dividedByFive)}${
    remainder != 0 ? CHANGE[remainder] : ''
  }`;
}

console.log(scoreToTally(3));
console.log(scoreToTally(5));
console.log(scoreToTally(9));
console.log(scoreToTally(28));
console.log(scoreToTally(19));
