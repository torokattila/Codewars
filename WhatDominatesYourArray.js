function dominator(arr) {
    let occurrences = {};
    let result = -1;

    arr.forEach(number => {
        occurrences[[number]] ? occurrences[number]++ : occurrences[number] = 1;
    })

    for (const [key, value] of Object.entries(occurrences)) {
        if (value > arr.length / 2) {
            result = parseInt(key);
        }
    }

    return result;
}

console.log(dominator([3,4,3,2,3,1,3,3]));
