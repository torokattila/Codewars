function modifyMultiply(str, loc, num) {
    str = str.replace(/[,.]/g, '');
    const wordsArray = str.split(' ');
    let hook = wordsArray[loc] + '-';

    return hook.repeat(num).slice(0, -1);
} 

console.log(modifyMultiply("Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.", 2, 5));