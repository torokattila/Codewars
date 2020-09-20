function pairs(ar) {
    let pairCounter = 0;
    let differrence = (a, b) => { return Math.abs(a - b); };

    if (ar.length % 2 != 0) {
        ar.pop();
    }

    for (let i = 0; i < ar.length; i++) {
        if (i % 2 == 0) {
            if (differrence(ar[i], ar[i + 1]) == 1) {
                pairCounter++;
            }
        }
    }

    return pairCounter;
};

console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5]));