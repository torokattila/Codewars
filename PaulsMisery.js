/*Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!

Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

kata = 5
Petes kata = 10
life = 0
eating = 1
The Misery Score is the total points gained from the array. Once you have the total, return as follows:

< 40 = 'Super happy!'
< 70 >= 40 = 'Happy!'
< 100 >= 70 = 'Sad!'
> 100 = 'Miserable!'*/

function paul(x) {
    const scores = {
        'kata': 5,
        'Petes kata': 10,
        'life': 0,
        'eating': 1
    };
    let scoreCounter = 0;

    x.forEach(item => {
        scoreCounter += scores[item];
    });

    return scoreCounter < 40 ? 'Super happy!' : scoreCounter < 70 && scoreCounter >= 40 ? 'Happy!' : scoreCounter < 100 && scoreCounter >= 70 ? 'Sad!' : scoreCounter >= 100 ? 'Miserable!' : '';
}

const paulArray = [ 'life',
'Petes kata',
'eating',
'Petes kata',
'life',
'life',
'life',
'eating',
'Petes kata',
'Petes kata',
'kata',
'Petes kata',
'eating',
'kata',
'life',
'kata',
'kata',
'Petes kata',
'kata',
'eating',
'life',
'life',
'eating',
'life',
'kata',
'kata',
'life',
'life' ];

console.log(paul(paulArray));