/*Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. 
If the number cannot be matched then the function should return the string Unknown.

| Card Type  | Begins With          | Number Length |
|------------|----------------------|---------------|
| AMEX       | 34 or 37             | 15            |
| Discover   | 6011                 | 16            |
| Mastercard | 51, 52, 53, 54 or 55 | 16            |
| VISA       | 4                    | 13 or 16      |
Examples
getIssuer(4111111111111111) == "VISA"
getIssuer(4111111111111) == "VISA"
getIssuer(4012888888881881) == "VISA"
getIssuer(378282246310005) == "AMEX"
getIssuer(6011111111111117) == "Discover"
getIssuer(5105105105105100) == "Mastercard"
getIssuer(5105105105105106) == "Mastercard"
getIssuer(9111111111111111) == "Unknown"*/

const isAmex = (num) => {
    const firstTwoNum = `${num}`.substring(0, 2);

    return (
        (firstTwoNum === '34' || firstTwoNum === '37') && `${num}`.length === 15
    );
};

const isDiscover = (num) => {
    const firstFourNum = `${num}`.substring(0, 4);

    return firstFourNum === '6011' && `${num}`.length === 16;
};

const isMastercard = (num) => {
    const firstTwoNum = `${num}`.substring(0, 2);

    return (
        (firstTwoNum === '51' ||
            firstTwoNum === '52' ||
            firstTwoNum === '53' ||
            firstTwoNum === '54' ||
            firstTwoNum === '55') &&
        `${num}`.length === 16
    );
};

const isVisa = (num) => {
    return (
        (`${num}`.charAt(0) === '4' && `${num}`.length === 13) ||
        (`${num}`.charAt(0) === '4' && `${num}`.length === 16)
    );
};

function getIssuer(number) {
    if (isAmex(number)) return 'AMEX';
    if (isDiscover(number)) return 'Discover';
    if (isMastercard(number)) return 'Mastercard';
    if (isVisa(number)) return 'VISA';

    return 'Unknown';
}

console.log(getIssuer(4111111111111111));
console.log(getIssuer(4111111111111));
console.log(getIssuer(4012888888881881));
console.log(getIssuer(378282246310005));
console.log(getIssuer(6011111111111117));
console.log(getIssuer(5105105105105100));
console.log(getIssuer(9111111111111111));
