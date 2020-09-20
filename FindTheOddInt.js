function findOdd(A) {
    let occurrences = {};
    let oddInt = 0;

    if (A.length == 1) {
        oddInt = A[0];
    }

    for (let i = 0; i < A.length; i++) {
        if (occurrences[A[i]]) {
            occurrences[A[i]]++;
        } else {
            occurrences[A[i]] = 1;
        }
    }

    for (const [key, value] of Object.entries(occurrences)) {
        if (value % 2 != 0) {
            oddInt = parseInt(key);
        }
    }

    return oddInt;
}

console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]));