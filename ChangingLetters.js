//When provided with a String, capitalize all vowels

function swap(st) {
    st = st.split('');

    return st.map(character => {
        if (/[aeiou]/.test(character)) {
            return character.toUpperCase();
        }
        
        return character;
    }).join('');
}

console.log(swap("Hello World!"));
