function solve(s) {
    const numberRegex = /\d+/g;
    let matches = s.match(numberRegex).sort((a, b) => { return b - a});

    return parseInt(matches[0]);
};

console.log(solve("vih61w8oohj5"));