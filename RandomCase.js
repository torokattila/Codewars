/*
Write a function that will randomly upper and lower characters in a string - randomCase() (random_case() for Python).

A few examples:

randomCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit") == "lOReM ipSum DOloR SiT AmeT, cOnsEcTEtuR aDiPiSciNG eLIt"

randomCase("Donec eleifend cursus lobortis") == "DONeC ElEifEnD CuRsuS LoBoRTIs"
Note: this function will work within the basic ASCII character set to make this kata easier - so no need to make the function multibyte safe.
*/

function randomCase(x) {
  let flag = false;

  return [...x]
    .map((char) => {
      if (flag) {
        char = char.toUpperCase();
      } else {
        char = char.toLowerCase();
      }

      flag = Math.random() < 0.5;

      return char;
    })
    .join('');
}

console.log(
  randomCase('Lorem ipsum dolor sit amet, consectetur adipiscing elit')
);
console.log(randomCase('Donec eleifend cursus lobortis'));
