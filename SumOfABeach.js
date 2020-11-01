/*Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the 
words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).*/

function sumOfABeach(beach) {
    beach = beach.toLowerCase().replace(/ /g, '');

    const matches = beach.match(/sun|water|fish|sand/gi);

    if (matches) {
        return matches.length;
    } else {
        return 0;
    }
}

console.log(sumOfABeach("SanD"))