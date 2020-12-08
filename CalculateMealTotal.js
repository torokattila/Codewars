/*Create a function that returns the total of a meal including tip and tax. You should not tip on the tax.

You will be given the subtotal, the tax as a percentage and the tip as a percentage. Please round your result 
to two decimal places.*/

function calculate_total(subtotal, tax, tip) {
    return parseFloat((subtotal + (subtotal * ((tax + tip) / 100))).toFixed(2));
}

console.log(calculate_total(36.97, 7, 15));