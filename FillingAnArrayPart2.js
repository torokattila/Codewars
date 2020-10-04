const squares = n => {
    let resultArray = [];

    for (let i = 1; i <= n; i++) {
        resultArray.push(i * i);
    }

    return resultArray;
}

const range = (n, start, step) => {
    let resultArray = new Array(n);

    for (let i = start; i <= (n * step) + 1; i += step) {
        console.log(i);
        resultArray.push(i)
    }

    return resultArray.filter(element => {
        return element != null;
    });
}

const random = (n, min, max) => {
    let resultArray = new Array(n);

    for (let i = 0; i < n; i++) {
        resultArray.push(Math.floor(Math.random() * (max - min + 1) + min))
    }

    return resultArray.filter(element => {
        return element != null;
    });
}

const primes = n => {
    let resultArray = new Array();

    for (let i = 2; i <= n * n; i++) {
        let prime = true;
        
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                prime = false;
            }
        }

        if (prime) {
            resultArray.push(i);
        }
    }

    return resultArray.slice(0, n);
}

console.log(primes(6));