var splitInParts = function (s, partLength) {
    return s.match(new RegExp('.{1,' + partLength + '}', 'g')).join(' ');
}

console.log(splitInParts("supercalifragilisticexpialidocious", 3));