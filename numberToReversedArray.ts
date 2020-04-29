export const digitize = (n: number): number[] => {
  let numbersStringArray: string[] = ("" + n).split("");
  let numberDigitsArray: number[] = [];

  numbersStringArray.forEach(function(stringNumbers) {
    numberDigitsArray.push(parseInt(stringNumbers));
  });

  return numberDigitsArray.reverse();
};

console.log(digitize(348597));
