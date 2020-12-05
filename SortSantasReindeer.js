/*Write a function that accepts a sequence of Reindeer names, and returns a sequence with the Reindeer 
names sorted by their last names.*/

function sortReindeer(reindeerNames) {
    reindeerNames.sort((a, b) => {
        let splitA = a.split(' ');
        let splitB = b.split(' ');
        let aLastName = splitA[splitA.length - 1];
        let bLastName = splitB[splitB.length - 1];

        if (aLastName < bLastName) return -1;
        if (aLastName > bLastName) return 1;

        return 0;
    });

    return reindeerNames;
}

const input = [
    "Dasher Tonoyan", "Dancer Moore", "Prancer Chua", "Vixen Hall",
    "Comet Karavani", "Cupid Foroutan", "Donder Jonker", "Blitzen Claus"
];

console.log(sortReindeer(input));