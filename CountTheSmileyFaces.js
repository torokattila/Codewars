/*Given an array (arr) as an argument complete the function countSmileys that should return the total 
number of smiling faces.*/

function countSmileys(arr) {
    let counter = 0;

    arr.forEach(face => {
        if (face == ':)' || face == ':-)' || face == ';-)' || face == ':~)' || face == ':-D' || 
            face == ';-D' || face == ':~D' || face == ':D' || face == ';D' || face == ';~D' || face == ';~)' ||
            face == ';)') {
            counter++;
        }
    });

    return counter;
}

console.log(countSmileys([ ':-)', ';~D', ':-D', ':_D' ]));