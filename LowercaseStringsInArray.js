function arrayLowerCase(arr) {
    
    let newArray = arr.map(item => {
        return typeof item === 'string' || item instanceof String ? item.toLowerCase() : item;
    })

    return newArray;
}

console.log(arrayLowerCase([1, 'Green']));