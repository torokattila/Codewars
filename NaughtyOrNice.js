function getNiceNames(people) {
    let resultArray = [];

    for (const [key, value] of Object.entries(people)) {
        if (value.name == null) {
            return resultArray;
        } else if (value.wasNice === true) {
            resultArray.push(value.name);
        }
    }

    return resultArray;
}

function getNaughtyNames(people) {
    let resultArray = [];

    for (const [key, value] of Object.entries(people)) {
        if (value.name == null) {
            return resultArray;
        } else if (value.wasNice === false) {
            resultArray.push(value.name);
        }
    }

    return resultArray;
}
