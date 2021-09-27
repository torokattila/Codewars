/*Given a list of elements [a1, a2, ..., an], with each ai being a string, 
write a function majority that returns the value that appears the most in the list.

If there's no winner, the function should return None, NULL, nil, etc, based on the programming language.

Example
majority(["A", "B", "A"]) returns "A"
majority(["A", "B", "B", "A"]) returns null*/

function majority(arr) {
    const occurrences = {};
    const occurrencesArray = [];

    if (arr.length === 0) return null;

    arr.forEach(item => {
        return occurrences[item] ? occurrences[item]++ : occurrences[item] = 1;
    });

    for (const [key, value] of Object.entries(occurrences)) {
        occurrencesArray.push({
            item: key,
            occurrence: value
        });
    }

    occurrencesArray.sort((a, b) => b.occurrence - a.occurrence);

    if (occurrencesArray.length > 1) {
        return occurrencesArray[0].occurrence === occurrencesArray[1].occurrence ? null : occurrencesArray[0].item;
    } else {
        return occurrencesArray[0].item;
    }
}

console.log(majority([]));