/*You have three input arguments -> actually cards -> actually strings :)

Let's play the game 'Twenty-one' creating a function that returns:

'twenty-one' ---> if the sum of cards equals 21
'more' ---> if the sum of cards more than 21
'less' ---> if the sum of cards less than 21
One nuance - we have lost spades cards of our deck and now it look like (preloaded as deck) that:

deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
        '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
        '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥'];
A few games:

('3♣', 'J♦', 'Q♥') -> 'less' // 3 + 2 + 3 < 21
('7♣', '7♦', '7♥') -> 'twenty-one' // 7 + 7 + 7  == 21
('10♣', 'Q♣','9♦') -> 'more' // 10 + 3 + 9 > 21
Some details:

the result does not depend on suit
ace can be only 11 points
points of J,Q,K are 2,3,4
*/

function twentyOne(card1, card2, card3) {
    const notNumbers = {
        J: 2,
        Q: 3,
        K: 4,
        A: 11,
    };

    const cards = [...arguments];
    const onlyValuesFromCards = cards.map((card) =>
        card.replace(/[^0-9A-Z]/, '')
    );
    const valuesArray = onlyValuesFromCards.map((value) => {
        value = notNumbers[value] ? notNumbers[value] : Number(value);

        return value;
    });

    const sum = valuesArray.reduce((accum, current) => accum + current);

    return sum === 21 ? 'twenty-one' : sum > 21 ? 'more' : 'less';
}

console.log(twentyOne('7♣', '7♦', '7♥'));
console.log(twentyOne('10♣', 'Q♣', '9♦'));
console.log(twentyOne('A♣', '4♦', 'Q♥'));
