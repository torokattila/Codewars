/*Kate and Michael want to buy a pizza and share it. Depending on the price of the pizza, they are going to divide the costs:

If the pizza is less than €5,- Michael invites Kate, so Michael pays the full price.
Otherwise Kate will contribute 1/3 of the price, but no more than €10 (she's broke :-) and Michael pays the rest.
How much is Michael going to pay? Calculate the amount with two decimals, if necessary.*/

function michaelPays(costs) {
    if (costs < 5) return Math.round(costs * 100) / 100;
    let result = 0;

    if (costs / 3 <= 10) {
        result = costs - costs / 3;
    } else {
        result = costs / 3 - 10 + (costs - costs / 3);
    }

    return Math.round(result * 100) / 100;
}

console.log(michaelPays(30));
console.log(michaelPays(80));
console.log(michaelPays(28.789));
console.log(michaelPays(5.9181));
console.log(michaelPays(4.325));
