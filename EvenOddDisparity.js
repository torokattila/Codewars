function solve(a) {
    let oddCounter = 0;
    let evenCounter = 0;

    a.forEach(item => {
        if (typeof item != 'string') {
            if (item % 2 === 0) {
                evenCounter++;
            } else if (item % 2 != 0) {
                oddCounter++;
            }
        }
    })

    return evenCounter - oddCounter;
};

console.log(solve([0,1,2,3]));