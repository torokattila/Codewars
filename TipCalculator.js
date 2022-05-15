/*Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

"Rating not recognised" in Javascript, Python and Ruby...
...or null in Java
...or -1 in C#
Because you're a nice person, you always round up the tip, regardless of the service.*/

const RATINGS = {
    terrible: 0,
    poor: 5,
    good: 10,
    great: 15,
    excellent: 20,
};

function calculateTip(amount, rating) {
    const lowerCaseRating = rating.toLowerCase();
    if (!RATINGS.hasOwnProperty(lowerCaseRating))
        return 'Rating not recognised';
    if (rating === RATINGS.terrible) return 0;

    const percentage = parseFloat(
        `1.${
            RATINGS[lowerCaseRating] === RATINGS.poor
                ? '0' + RATINGS.poor
                : RATINGS[lowerCaseRating]
        }`
    );

    return Math.ceil(Math.abs(amount - amount * percentage));
}

console.log(calculateTip(20, 'hi'));
console.log(calculateTip(20, 'Excellent'));
console.log(calculateTip(26.95, 'good'));
console.log(calculateTip(107.65, 'GReat'));
