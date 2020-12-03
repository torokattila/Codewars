/*You will be provided with an object(staff) containing the staff names as keys, and the department 
they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'*/

function boredom(staff) {
    const boredomScores = {
        'accounts': 1, 'finance': 2, 'canteen': 10, 'regulation': 3, 'trading': 6, 'change': 6, 'IS': 8, 'retail': 5, 'cleaning': 4, 'pissing about': 25
    };
    let boredomSum = 0;

    for (let [key, value] of Object.entries(staff)) {
        if (boredomScores[value]) {
            boredomSum += boredomScores[value];
        }
    }

    return boredomSum >= 100 ? 'party time!!' : boredomSum < 100 && boredomSum > 80 ? 'i can handle this' : 'kill me now';
}

const staff = {
    tim: 'change', jim: 'accounts',
    randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
    laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
    mr: 'finance'
};

console.log(boredom(staff));