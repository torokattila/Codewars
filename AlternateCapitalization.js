function capitalize(s) {
    let evenIndexUpper = "";
    let oddIndexUpper = "";

    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            evenIndexUpper += s.charAt(i).toUpperCase();
            oddIndexUpper += s[i]
        } else {
            oddIndexUpper += s.charAt(i).toUpperCase();
            evenIndexUpper += s[i];
        }
    }

    return [evenIndexUpper, oddIndexUpper];
};

console.log(capitalize("abcdef"));