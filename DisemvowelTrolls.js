function disemvowel(str) {
    return str.split('').map(character => {
        if (/[aeiouAEIOU]/.test(character)) {
            character = '';
        } else {
            return character;
        }
    }).join('');
}

console.log(disemvowel('This website is for losers LOL!'));