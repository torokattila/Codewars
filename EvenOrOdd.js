/*Given a string of digits confirm whether the sum of all the individual even digits are greater than the 
sum of all the indiviudal odd digits. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

If the total of both even and odd numbers are identical return: "Even and Odd are the same"*/

function evenOrOdd(str) {
    let evenNumbersSum = 0;
    let oddNumbersSum = 0;
    str.split('').forEach(character => {
        return parseInt(character) % 2 == 0 ? evenNumbersSum += parseInt(character) : oddNumbersSum += parseInt(character);
    });

    return evenNumbersSum == oddNumbersSum ? 'Even and Odd are the same' : evenNumbersSum > oddNumbersSum ? 'Even is greater than Odd' : oddNumbersSum > evenNumbersSum ? 'Odd is greater than Even' : null;
}

console.log(evenOrOdd('112'))