function sumDigits(number) {
    number = number.toString().split('');
    let numberArray = [];
    let sum = 0;

    number.forEach(item => {
        if (!isNaN(parseInt(item))) {
            numberArray.push(parseInt(item));
        }
    })

    numberArray.forEach(number => { sum += number });
    
    return sum;
}

console.log(sumDigits(-32));
