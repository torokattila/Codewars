function spacey(array){
    let resultArray = [];
    let stringToArray = ''

    array.forEach((item) => {
        stringToArray += item;
        resultArray.push(stringToArray);
    })

    return resultArray;
}