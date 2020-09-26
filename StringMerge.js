function stringMerge(string1, string2, letter) {
    return string1.substring(0, string1.indexOf(letter) + 1) + string2.substring(string2.indexOf(letter) + 1);
}

console.log(stringMerge("person","here", "e"));