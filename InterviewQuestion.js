function getStrings(city) {
    let cityCharacters = city.toLowerCase().replace(/ /g,'').split('');
    let resultString = '';

    cityCharacters = cityCharacters.reduce((acc, city) => {
        acc[city] ? acc[city] += '*' : acc[city] = '*';
        return acc;
    }, {});

    for (const [key, value] of Object.entries(cityCharacters)) {
        resultString += key + ':' + value + ',';
    }

    return resultString.slice(0, -1);
}

console.log(getStrings('Las Vegas'));