function noOdds(values) {
    return values.filter(value => value % 2 === 0);
}

console.log(noOdds([0, 1]));