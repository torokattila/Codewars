/*Write a function consonantCount, consonant_count or ConsonantCount that takes a string of 
English-language text and returns the number of consonants in the string.*/

function consonantCount(str) {
    let counter = 0;
    
    str.split('').forEach(character => {
        if (/^[qQwWrRtTzZpPsSdDfFgGhHjJkKlLxXyYcCvVbBnNmM]/.test(character)) {
            counter++;
        }
    });

    return counter;
}

console.log(consonantCount('XaeiouX'))