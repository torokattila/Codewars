/*Given an object (meet) containing team member names as keys, and their happiness 
rating out of 10 as the value, you need to assess the overall happiness rating of the group. 
If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

Happiness rating will be total score / number of people in the room.

Note that your boss is in the room (boss), their score is worth double it's face value (but they are still 
just one person!).*/

function outed(meet, boss) {
    let sum = 0;

    for (let [key, value] of Object.entries(meet)) {
        if (key == boss) {
            value = value * 2;
        }

        sum += value;
    }

    return (sum / Object.keys(meet).length <= 5) ? 'Get Out Now!' : 'Nice Work Champ!';
}

console.log(outed({ 'tim': 0, 'jim': 2, 'randy': 0, 'sandy': 7, 'andy': 0, 'katie': 5, 'laura': 1, 'saajid': 2, 'alex': 3, 'john': 2, 'mr': 0 }, 'laura'));