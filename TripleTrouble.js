/*Create a function that will return a string that combines all of the letters of the three inputed strings in groups. 
Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"*/

function tripleTrouble(one, two, three) {
	let result = '';

    for (let i = 0; i < one.length; i++) {
        result += `${one[i]}${two[i]}${three[i]}`;
    }

    return result;
}

console.log(tripleTrouble('LLh', 'euo', 'xtr'));
