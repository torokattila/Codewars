function accum(s) {
    const characterArray = s.toLowerCase().split('');
    let resultString = '';
    
    for (let i = 0; i < characterArray.length; i++) {
        if (i == characterArray.length - 1) {
            resultString += characterArray[i][0].toUpperCase() + characterArray[i].repeat(i);
        } else {
            resultString += characterArray[i][0].toUpperCase() + characterArray[i].repeat(i) + '-';
        }
    }

    return resultString;
}

console.log(accum("ZpglnRxqenU"))