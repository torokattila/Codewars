/*Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; 
and month 11 (November), is part of the fourth quarter.*/

const QUARTERS = {
    1: [1, 2, 3],
    2: [4, 5, 6],
    3: [7, 8, 9],
    4: [10, 11, 12],
};

const quarterOf = (month) => {
    if (month > 12) return null;
    let result = 0;

    for (const [key, value] of Object.entries(QUARTERS)) {
        if (QUARTERS[key].includes(month)) {
            result = month;
        }
    }

    return result;
};

console.log(quarterOf(8));
