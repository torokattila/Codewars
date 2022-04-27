/*In this kata you need to create a function that takes a 2D array/list of non-negative integer pairs and returns the sum of all the "saving" that you can have getting the LCM of each couple of number compared to their simple product.

For example, if you are given:

[[15,18], [4,5], [12,60]]
Their product would be:

[270, 20, 720]
While their respective LCM would be:

[90, 20, 60]
Thus the result should be:

(270-90)+(20-20)+(720-60)==840
*/

const findGCD = (num1, num2) => {
    if (num2 === 0) return num1;

    return findGCD(num2, num1 % num2);
};

const findLCM = (num1, num2) => {
    let gcd = findGCD(num1, num2);

    return (num1 * num2) / gcd;
};

const sumDifferencesBetweenProductsAndLCMs = (pairs) => {
    if (pairs.length === 0) return 0;
    const products = pairs.map((pair) => pair[0] * pair[1]);
    const lcms = pairs.map((pair) =>
        pair[0] === 0 && pair[1] === 0 ? 0 : findLCM(pair[0], pair[1])
    );
    let result = 0;

    for (let i = 0; i < products.length; i++) {
        result += products[i] - lcms[i];
    }

    return result;
};

console.log(
    sumDifferencesBetweenProductsAndLCMs([
        [15, 18],
        [4, 5],
        [12, 60],
    ])
);
