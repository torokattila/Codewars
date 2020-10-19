const removeConsecutiveDuplicates = s => {
    return s.split(' ').filter((value, index, array) => {
        return value != array[index + 1];
    }).join(' ');
}

console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))