const getTurkishNumber = (num) => {
    const zeroToNine = ['sıfır', 'bir', 'iki', 'üç', 'dört', 'beş', 'altı', 'yedi', 'sekiz', 'dokuz'];
    const tenToNinety = ['on', 'yirmi', 'otuz', 'kırk', 'elli', 'altmış', 'yetmiş', 'seksen', 'doksan'];
    let finalName = ''

    if (num === 0) {
        finalName += zeroToNine[0];
    } else if (num % 10 === 0) {
        num = num.toString();
        let digitArray = num.split('');
        finalName += tenToNinety[parseInt(digitArray[0] - 1)];
    } else if (num >= 10) {
        num = num.toString();
        let digitArray = num.split('');
        finalName += tenToNinety[parseInt(digitArray[0] - 1)] + ' ' + zeroToNine[parseInt(digitArray[1])];
    } else {
        finalName += zeroToNine[num];
    }

    return finalName;
}

console.log(getTurkishNumber(70));