/*Given a mixed array of number and string representations of integers, add up the string integers 
and subtract this from the total of the non-string integers.*/

function divCon(x) {
    let integerSum = 0;
    let stringSum = 0;

    x.forEach(element => {
        return typeof element == 'number' ? integerSum += element : stringSum += parseInt(element);
    });

    return integerSum - stringSum;
}

console.log(divCon([9, 3, '7', '3']));