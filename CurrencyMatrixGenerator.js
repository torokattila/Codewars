/*
Currency Matrix Generator (7 kyu)

On the Forex Market the currency symbols for exchange between two currencies are put 
together in regards to their strength and weakness. The order of the currency strength is as follows:

"EUR", "GBP", "AUD", "NZD", "USD", "CAD", "CHF", "JPY"

So for AUD the currency matrix would be as follows EURAUD, GBPAUD, AUDNZD, AUDUSD, AUDCAD, AUDCHF, AUDJPY

Your goal is to generate this currency matrix for a given currency. You can assume 
that the passed in currency is a valid one.
*/

const CURRENCIES = ['EUR', 'GBP', 'AUD', 'NZD', 'USD', 'CAD', 'CHF', 'JPY'];

function generateCurrencyMatrix(currency) {
  const result = [];
  const indexOfCurrency = CURRENCIES.indexOf(currency);

  CURRENCIES.forEach((curr) => {
    const indexOfCurrentCurrency = CURRENCIES.indexOf(curr);
    if (curr !== currency) {
      if (indexOfCurrency < indexOfCurrentCurrency) {
        result.push(`${currency}${curr}`);
      } else {
        result.push(`${curr}${currency}`);
      }
    }
  });

  return result;
}

console.log(generateCurrencyMatrix('AUD'));
console.log(generateCurrencyMatrix('EUR'));
console.log(generateCurrencyMatrix('GBP'));
console.log(generateCurrencyMatrix('CHF'));
