/*Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. 
His parents can't keep up calculating this so they've begged you to help them out by writing a 
programme that can answer Philip's endless questions.

Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. 
As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, 
so your function needs to work with both dates in the future and in the past.

Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: 
"You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

"..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for 
both "year" and "years", depending on the result.*/

function calculateAge() {
    const parameters = [...arguments];
    const firstYear = parameters[0];
    const secondYear = parameters[1];
    const difference =
        firstYear === secondYear
            ? 0
            : firstYear > secondYear
            ? firstYear - secondYear
            : secondYear - firstYear;

    return difference === 0
        ? 'You were born this very year!'
        : firstYear > secondYear
        ? `You will be born in ${
              difference === 1 ? difference + ' year.' : difference + ' years.'
          }`
        : `You are ${
              difference === 1 ? difference + ' year' : difference + ' years'
          } old.`;
}

console.log(calculateAge(2000, 1990));
console.log(calculateAge(900, 2900));
console.log(calculateAge(2000, 2000));
