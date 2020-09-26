function makeString(s) {
    return s.split(' ').map(word => { return word.charAt(0); }).join('');
}

console.log(makeString("sees eyes xray yoat"));
