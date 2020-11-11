/*A Tidy number is a number whose digits are in non-decreasing order.
Given a number, Find if it is Tidy or not .*/

function tidyNumber(n) {
    let isTidy = true;
    n = n.toString().split('');

    for (let i = 0; i < n.length - 1; i++) {
        if (parseInt(n[i]) > parseInt(n[i + 1])) {
            isTidy = false;
        }
    }

    return isTidy;
}

console.log(tidyNumber(2335))