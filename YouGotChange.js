/*Create a function that will take any amount of money and break it down to the smallest number of bills as possible. 
Only integer amounts will be input, NO floats. This function should output a sequence, 
where each element in the array represents the amount of a certain bill type. The array will be set up in this manner:

array[0] ---> represents $1 bills

array[1] ---> represents $5 bills

array[2] ---> represents $10 bills

array[3] ---> represents $20 bills

array[4] ---> represents $50 bills

array[5] ---> represents $100 bills

In the case below, we broke up $365 into 1 $5 bill, 1 $10 bill, 1 $50 bill, and 3 $100 bills.

giveChange(365) // =>  [0,1,1,0,1,3]
In this next case, we broke $217 into 2 $1 bills, 1 $5 bill, 1 $10 bill, and 2 $100 bills.

giveChange(217) // => [2,1,1,0,0,2]*/

function giveChange(amount) {
    const billTypesObject = {
        ones: 0,
        fives: 0,
        tens: 0,
        twenties: 0,
        fifties: 0,
        hundreds: 0
    };

    if (Math.floor(amount / 100) > 0) {
        billTypesObject.hundreds += Math.floor(amount / 100);
        amount -= Math.floor(amount / 100) * 100;
    }

    if (Math.floor(amount / 50) > 0) {
        billTypesObject.fifties += Math.floor(amount / 50);
        amount -= Math.floor(amount / 50) * 50;
    }

    if (Math.floor(amount / 20) > 0) {
        billTypesObject.twenties += Math.floor(amount / 20);
        amount -= Math.floor(amount / 20) * 20;
    }

    if (Math.floor(amount / 10) > 0) {
        billTypesObject.tens += Math.floor(amount / 10);
        amount -= Math.floor(amount / 10) * 10;
    }

    if (Math.floor(amount / 5) > 0) {
        billTypesObject.fives += Math.floor(amount / 5);
        amount -= Math.floor(amount / 5) * 5;
    }

    if (Math.floor(amount / 1) > 0) {
        billTypesObject.ones += Math.floor(amount / 1);
        amount -= Math.floor(amount / 1) * 1;
    }

    return [billTypesObject.ones, billTypesObject.fives, billTypesObject.tens, billTypesObject.twenties, billTypesObject.fifties, billTypesObject.hundreds];
}

console.log(giveChange(217));