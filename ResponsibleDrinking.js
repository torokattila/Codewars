//Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

function hydrate(s) {
    const numberPattern = /\d+/g;
    const numbersArray = s.match(numberPattern);
    const sum = numbersArray.reduce((accum, current) => { return parseInt(accum) + parseInt(current) });

    return sum == 1 ? '1 glass of water' : `${sum} glasses of water`;
}

console.log(hydrate("1 beer"));
