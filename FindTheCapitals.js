function capital(capitals) {
    let capitalsArray = [];
    let resultSet = new Set()

    for (let i = 0; i < capitals.length; i++) {
        capitalsArray.push(Object.values(capitals[i]));
    }


    for (let i = 0; i < capitalsArray.length; i++) {
        for (let j = 0; j < capitalsArray.length; j++) {
            resultSet.add(`The capital of ${capitalsArray[j][0]} is ${capitalsArray[j][1]}`);
        }
    }

    return Array.from(resultSet);
}

console.log(capital([ { country: 'Canada', capital: 'Ottawa' },
{ state: 'Colorado', capital: 'Denver' },
{ country: 'Iran', capital: 'Tehran' } ]));