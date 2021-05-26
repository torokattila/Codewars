/*Given a string, you progressively need to concatenate the first letter from the left and the first letter 
to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.

If the string's length is odd drop the central element.

For example:

charConcat("abcdef")    == 'af1be2cd3'
charConcat("abc!def")   == 'af1be2cd3' // same result*/

function charConcat(string) {
	let resultString = '';
    const characters = [...string];

    if (string.length % 2 != 0) {
        const middleElement = Math.floor(characters.length / 2);

        characters.splice(middleElement, 1);
    }

    for (let i = 0; i < characters.length; i++) {
        if (i == characters.length / 2) {
            break;
        } else {
            resultString += characters[i] + characters[characters.length - 1 - i] + (i + 1).toString();
        }
    }

    return resultString;
}

console.log(charConcat("ncuhknfy2on07jsqqdhu76ncfv2tej7gjgnt5"));