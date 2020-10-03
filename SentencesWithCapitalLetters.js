function fix(paragraph){

    paragraph = paragraph.split('. ');
    let resultString = '';

    for (let i = 0; i < paragraph.length; i++) {
        paragraph[i] = paragraph[i].substring(0, 1).toUpperCase() + paragraph[i].substring(1);

        if (i != paragraph.length - 1) {
            resultString += paragraph[i] + '. ';
        } else {
            resultString += paragraph[i];
        }
    }
    
    return resultString;
}

console.log(fix("hello. my name is inigo montoya. you killed my father. prepare to die."));