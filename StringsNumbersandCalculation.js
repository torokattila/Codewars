/*Input: String which consists of two positive numbers (doubles) and exactly one operator 
like +, -, * or / always between these numbers. The string is dirty, which means that there are 
different characters inside too, not only numbers and the operator. You have to combine all digits left 
and right, perhaps with "." inside (doubles), and to calculate the result which has to be rounded to an 
integer and converted to a string at the end.*/

function calculateString(st) {
    const numberAndOperaionsPattern = /[0-9\*+-/]/;
    s = st.split('');
    let numbersAndOperationsArray = [];

    s.forEach(character => {
        if (character.match(numberAndOperaionsPattern)) {
            numbersAndOperationsArray.push(character);
        }
    })

    let matemathicalString = numbersAndOperationsArray.join('');
    // matemathicalString = matemathicalString.split(/([\*+-/])/);

    return Math.round(eval(matemathicalString)).toString();
}

console.log(calculateString("fsdfsd234.4554s4234df+sf234442"))