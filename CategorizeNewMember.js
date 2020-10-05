function openOrSenior(data) {
    let memberArray = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] > 7) {
            memberArray.push('Senior')
        } else {
            memberArray.push('Open')
        }
    }

    return memberArray;
}

console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]));