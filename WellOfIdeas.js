/*In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 
'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a 
series!'. If there are no good ideas, as is often the case, return 'Fail!'.

The sub arrays may not be the same length.

The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs 
may not be strings.*/

function well(x) {
    let goodCounter = 0;

    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < x[i].length; j++) {
            if (typeof x[i][j] != 'string') {
                continue;
            } else {
                if (x[i][j].toLowerCase() == 'good') {
                    goodCounter++;
                }
            }
        }
    }

    return goodCounter > 2 ? 'I smell a series!' : goodCounter > 0 && goodCounter <= 2 ? 'Publish!' : 'Fail!';
}

const example = [['6', 6, 'bad', 16],
[6, 'RAD', 'bad'],
['bad', 6, 'bAd', 16, 'bAd']]
console.log(well(example));