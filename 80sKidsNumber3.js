/*Punky loves wearing different colored socks, but Henry can't stand it.

Given an array of different colored socks, return a pair depending on who was picking them out.

Example:

getSocks('Punky', ['red','blue','blue','green']) -> ['red', 'blue']
Note that Punky can have any two colored socks, in any order, as long as they are different and both exist. Henry always picks a matching pair.

If there is no possible combination of socks, return an empty array.*/

function getSocks(name, socks) {
    let socksArray = [];
    let socksSet = new Set();
    let occurrences = {};

    if (name == 'Punky') {
        for (let i = 0; i < socks.length; i++) {
            socksSet.add(socks[i]);
        }

        socksArray = Array.from(socksSet);

        return socksArray.length > 1 ? socksArray.slice(0, 2) : [];
    } else if (name == 'Henry') {

        socks.forEach(sock => occurrences[sock] ? occurrences[sock]++ : occurrences[sock] = 1);

        for (const [key, value] of Object.entries(occurrences)) {
            if (value > 1) {
                for (let i = 0; i < value; i++) {
                    socksArray.push(key);
                }
            }
        }

        return socksArray.slice(0, 2);
    }
}

console.log(getSocks('Punky', [ 'pink', 'pink', 'pink', 'pink' ]));