function battle(x, y) {
  let xChars = x.split('');
  let yChars = y.split('');
  let tempX = x;
  let tempY = y;
  let xNumbersArray = [];
  let yNumbersArray = [];
  const scores = { 
      A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26,
  };

  xChars.forEach((character) => {
    if (scores[character]) {
      tempX = tempX.replace(character, "+" + scores[character]);
    }
  });

  yChars.forEach((character) => {
    if (scores[character]) {
      tempY = tempY.replace(character, "+" + scores[character]);
    }
  });

  tempX.split("+").forEach((item) => {
    if (!Number.isNaN(parseInt(item))) {
      xNumbersArray.push(parseInt(item));
    }
  });

  tempY.split("+").forEach((item) => {
    if (!Number.isNaN(parseInt(item))) {
      yNumbersArray.push(parseInt(item));
    }
  });

  const xArraySum = xNumbersArray.reduce((accum, current) => { return accum + current });
  const yArraySum = yNumbersArray.reduce((accum, current) => { return accum + current });

  if (xArraySum == yArraySum) {
      return "Tie!";
  } else if (xArraySum > yArraySum) {
      return x;
  } else {
      return y;
  }
}

console.log(battle("ONE", "NEO"));
