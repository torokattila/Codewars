/*#Description

Everybody has probably heard of the animal heads and legs problem from the earlier years at school. It goes:

“A farm contains chickens and cows. There are x heads and y legs. How many chickens and cows are there?”

Where x <= 1000 and y <=1000

#Task

Assuming there are no other types of animals, work out how many of each animal are there.

Return a tuple in Python - (chickens, cows) and an array list - [chickens, cows]/{chickens, cows} in all other languages

If either the heads & legs is negative, the result of your calculation is negative or 
the calculation is a float return "No solutions" (no valid cases), or [-1, -1] in COBOL.*/

function animals(heads, legs) {
    const fourLegged = legs / 2 - heads;
    const twoLegged = heads - fourLegged;

    if (
        fourLegged < 0 ||
        twoLegged < 0 ||
        fourLegged % 1 !== 0 ||
        twoLegged % 1 !== 0
    ) {
        return 'No solutions';
    }

    return [twoLegged, fourLegged];
}

console.log(animals(25, 555));
