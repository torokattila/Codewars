/*Write the function lifePathNumber(dateOfBirth) that accepts a date of birth (as a string) on the 
following format: "yyyy-mm-dd". Where "y" is year, "m" is month and "d" is day. 
The function shall return a one digit integer between 1 and 9 which represents the Life Path Number of the 
given date of birth.*/

function lifePathNumber(dateOfBirth) {
    dateOfBirth = dateOfBirth.split('-');
    let yearSum = 0;
    let finalYearSum = 0;
    let monthSum = 0;
    let daySum = 0;
    let finalResult = 0;

    dateOfBirth[0].split('').forEach(number => {
        yearSum += parseInt(number);
    })

    yearSum.toString().split('').forEach(number => {
        finalYearSum += parseInt(number);
    });

    dateOfBirth[1].split('').forEach(number => {
        monthSum += parseInt(number);
    })

    dateOfBirth[2].split('').forEach(number => {
        daySum += parseInt(number);
    });

    (finalYearSum + monthSum + daySum).toString().split('').forEach(number => {
        finalResult += parseInt(number);
    });

    if (finalResult.toString() == '10') {
        finalResult = parseInt(finalResult.toString().slice(0,1));
    }

    return finalResult;
}

console.log(lifePathNumber("1961-07-04"));