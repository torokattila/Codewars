/*The month is Oktober. The climate is amenable. The beer is fresh. And cold.

Two clans go to war.

Sat on opposite sides of a viking long table, the Bavarian Beer Bears and the Scandinavian 
Schöllers prepare to go head-to-head in an historic challenge.

A Viking Game of Fives!

Vikings are friendly, beer guzzling folk. The aim of the game is for both teams to produce the same number of 5s 
so that the whole viking horde will recieve a free round of beer from the referee, Bjorg Bjorgeson.

However, Bjorg has been drinking all day and so has lost his ability to compare the number of fives that the Vikings are showing.

Create a function that takes in the two teams' arrays, compares the number of 5s shown and if they match, 
return "Drinks All Round! Free Beers on Bjorg!".

If they don't, return "Uh Oh! Bjorg's a donut! No beer for anyone!" .

It is guaranteed that both arrays will only contain integers 0 to 9.
*/

function gameOfFives(bavarianBeerBears, scandinavianSchöllers) {
  const numberOfBavarianFives = bavarianBeerBears.filter(
    (num) => num === 5
  ).length;
  const numberOfScandinavianFives = scandinavianSchöllers.filter(
    (num) => num === 5
  ).length;

  return numberOfBavarianFives === numberOfScandinavianFives
    ? 'Drinks All Round! Free Beers on Bjorg!'
    : `Uh Oh! Bjorg's a donut! No beer for anyone!`;
}

console.log(gameOfFives([5, 5, 1], [5, 1, 5]));
console.log(gameOfFives([5, 7, 1], [5, 1, 5]));
console.log(
  gameOfFives([5, 7, 3, 5, 7, 1, 5, 8, 1, 5, 6, 1], [5, 1, 5, 6, 6, 6, 5, 5])
);