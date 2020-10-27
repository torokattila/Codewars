function divisibleByThree(str) {
    str = str.split('');

    const sum = str.reduce((accum, current) => {
        return parseInt(accum) + parseInt(current);
    })

    return sum % 3 == 0 ? true : false;
}

console.log(divisibleByThree('19254'));