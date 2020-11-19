/*You are working at a lower league football stadium and you've been tasked with automating the scoreboard.

The referee will shout out the score, you have already set up the voice recognition module which turns the 
ref's voice into a string, but the spoken score needs to be converted into a pair for the scoreboard!*/

function scoreboard(string) {
    const scores = {
        nil: '0', one: '1', two: '2', three: '3', 'four': '4', five: '5', six: '6', seven: '7', eight: '8', nine: '9'
    };
    const words = string.toLowerCase().split(' ');
    let resultArray = [];

    words.forEach(word => {
        if (scores[word]) {
            string = string.replace(word, scores[word]);
        }
    });

    string.split('').forEach(character => {
        return /\d/.test(character) ? resultArray.push(parseInt(character)) : null;
    });

    return resultArray;
}

console.log(scoreboard("The score is four nil"));