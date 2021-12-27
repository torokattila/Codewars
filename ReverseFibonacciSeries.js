/*Write a function to generate 'n' number of fibonacci series (0,1,1,2,3...) in reverse order . 
The output should be a string of fibonacci series in the reverse order upto the given number.

Example
reverseFibo(3)  // => '110'
reverseFibo(10) // => '3421138532110'*/

function reverseFibo(n) {
    let fiboSeries = [0, 1];

    for (let i = 2; i < n; i++) {
        fiboSeries.push(i);
        fiboSeries[i] = fiboSeries[i - 1] + fiboSeries[i - 2];
    }

    return fiboSeries.reverse().join('');
}

console.log(reverseFibo(10));