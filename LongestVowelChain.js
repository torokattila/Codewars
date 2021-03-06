function solve(s) {
    const separateVowels = s.replace(/[^aeiou]/ig, ' ').split(' ');

    return separateVowels.sort((a, b) => b.length - a.length)[0].length;
}

console.log(solve('ultrarevolutionariees'));