function dup(s) {
    let resultArray = [];

    s.forEach(element => {
        resultArray.push(element.replace(/(.)\1+/g, '$1'));
    });

    return resultArray;
};

console.log(dup(["kelless","keenness"]));