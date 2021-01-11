/*Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this 
format: "MONTH DATE, YEAR".*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    const currentDateArray = currentDate.split(/[\s,]+/);
    const expirationDateArray = expirationDate.split(/[\s,]+/);
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const currentDateMonth = parseInt(months.indexOf(currentDateArray[0]));
    const currentDateDay = parseInt(currentDateArray[1]) + 1;
    const currentDateYear = parseInt(currentDateArray[2]);
    const expirationDateMonth = parseInt(months.indexOf(expirationDateArray[0]));
    const expirationDateDay = parseInt(expirationDateArray[1]) + 1;
    const expirationDateYear = parseInt(expirationDateArray[2]);
    const currentDateCalcFormat = new Date(currentDateYear, currentDateMonth, currentDateDay);
    const expirationDateCalcFormat = new Date(expirationDateYear, expirationDateMonth, expirationDateDay);

    return currentDateCalcFormat <= expirationDateCalcFormat && enteredCode === correctCode;
    
}

console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'));