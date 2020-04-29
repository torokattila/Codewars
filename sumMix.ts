export function sumMix(x: any[]): number {
    let sum: number = 0;

    x.forEach(function (item) {
        sum += parseInt(item);
    });

    return sum;
}

console.log(sumMix([9, 3, '7', '3']));
