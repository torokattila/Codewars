/*Buying in bulk is often cheaper than buying individual items. 
You will have to determine the total cost of apples. Write a function called apples that takes the arguments kilos and price. 
Purchases of 1 or more kilograms get a discount of 5%, purchases of 3 or more kilograms get a discount of 10%, 
purchases of 5 or more kilograms get a discount of 15%, and so on until you reach the maxium discount of 30%.*/

function apples(kilos, price) {
    if (kilos < 1) return kilos * price;
    let discount = 0;
    if (kilos >= 13) return kilos * price - kilos * price * (30 / 100);

    if (kilos >= 1 && kilos < 3) discount += 5;
    if (kilos >= 3 && kilos < 5) discount += 10;
    if (kilos >= 5 && kilos < 7) discount += 15;
    if (kilos >= 7 && kilos < 9) discount += 20;
    if (kilos >= 9 && kilos < 11) discount += 25;
    if (kilos >= 11) discount += 30;

    return kilos * price - kilos * price * (discount / 100);
}

console.log(apples(1, 6.7));
