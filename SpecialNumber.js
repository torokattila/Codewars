/*A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5
Given a number determine if it special number or not .*/

function specialNumber(n) {
    let isSpecial = true;
    const specialNumbers = [0, 1, 2, 3, 4, 5];
    n = n.toString().split('');

    n.forEach(number => {
        if (specialNumbers.indexOf(parseInt(number)) === - 1) {
            isSpecial = false;
        }
    });

    return isSpecial ? 'Special!!' : 'NOT!!';
}

console.log(specialNumber(2783));