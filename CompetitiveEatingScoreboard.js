/*You are the judge at a competitive eating competition and you need to choose a winner!

There are three foods at the competition and each type of food is worth a different amount of points. 
Points are as follows:

Chickenwings: 5 points

Hamburgers: 3 points

Hotdogs: 2 points

Write a function that helps you create a scoreboard. It takes as a parameter a list of objects representing 
the participants, for example:

[
  {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
  {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
]
It should return "name" and "score" properties sorted by score; if scores are equals, sort alphabetically by name.

[
  {name: "Big Bob", score: 134},
  {name: "Habanero Hillary", score: 98}
]
*/

function scoreboard(whoAteWhat) {
    if (whoAteWhat.length === 0) return [];
    const namesWithScores = [];

    whoAteWhat.forEach((participant) => {
        namesWithScores.push({
            name: participant.name,
            score:
                participant.chickenwings * 5 +
                participant.hamburgers * 3 +
                participant.hotdogs * 2,
        });
    });

    return namesWithScores.sort((a, b) => {
        if (a.score === b.score) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        } else {
            return b.score - a.score;
        }
    });
}

console.log(
    scoreboard([
        { name: 'Joey Jaws', chickenwings: 0, hamburgers: 1, hotdogs: 1 },
        { name: 'Big Bob', chickenwings: 1, hamburgers: 0, hotdogs: 0 },
    ])
);
