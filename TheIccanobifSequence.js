/*Your task is to create an array of size n with the values of the Fibonnaci sequence, 
and reverse the order in which the sequence is displayed.

For example: [1, 1, 2, 3, 5] would become [5, 3, 2, 1, 1]

You can assume that n will always be a positive integer between and including, 1 and 64.*/

function iccanobif(n) {
    if (n === 1) return [1];
    let fiboSeries = [1, 1];
    
    for (let i = 2; i < n; i++) {
        fiboSeries.push(i);
        fiboSeries[i] = fiboSeries[i - 1] + fiboSeries[i - 2];
    }

    return fiboSeries.reverse();
}

console.log(iccanobif(12));
