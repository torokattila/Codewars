/*Given an array of numbers (in string format), you must return a string. The numbers correspond 
to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and 
' ' that are represented by '27', '28' and '29' respectively.*/

function switcher(x) {
    let scores = {
        '29': ' ', '28': '?', '27': '!', '26': 'a', '25': 'b', '24': 'c', '23': 'd', '22': 'e', '21': 'f', '20': 'g', '19': 'h', '18': 'i', '17': 'j', '16': 'k', '15': 'l', '14': 'm', '13': 'n', '12': 'o', '11': 'p', '10': 'q', '9': 'r', '8': 's', '7': 't', '6': 'u', '5': 'v', '4': 'w', '3': 'x', '2': 'y', '1': 'z'
    }

    return x.map(character => {
        if (scores[character]) {
            character = scores[character];
        }

        return character;
    }).join('');
}

console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']));