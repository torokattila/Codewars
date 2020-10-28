//Write a function that checks if all the letters in the second string are present in the first one at least once, regardless of how many times they appear:

function letterCheck(arr) {
    return arr[1].toLowerCase().split('').every(character => {
        return arr[0].toLowerCase().indexOf(character) != -1;
    });
}

console.log(letterCheck(["parses", "parsecs"]));