/*The Club Doorman will give you a word. To enter the Club you need to provide the right number according to provided the word.

Every given word has a doubled letter, like 'tt' in lettuce.

To answer the right number you need to find the doubled letter's position of the given word in the alphabet and 
multiply this number per 3.

It will be given only words with one doubled letter.


EXAMPLE
Lettuce is the given word. 't' is the doubled letter and it's position is 20 in the alphabet.

The answer to the Club Doorman is 20 * 3 = 60


TASK
The function passTheDoorMan with a given string word shall return the right number.*/

function passTheDoorMan(word) {
	const alphabet = {
		a: 1,
		b: 2,
		c: 3,
		d: 4,
		e: 5,
		f: 6,
		g: 7,
		h: 8,
		i: 9,
		j: 10,
		k: 11,
		l: 12,
		m: 13,
		n: 14,
		o: 15,
		p: 16,
		q: 17,
		r: 18,
		s: 19,
		t: 20,
		u: 21,
		v: 22,
		w: 23,
		x: 24,
		y: 25,
		z: 26
	};

    let doubledLetter = '';

    for (let i = 0, length = word.length; i < length; i++) {
        if (word[i] === word[i - 1]) {
            doubledLetter = word[i];
        }
    }

    return alphabet[doubledLetter] * 3;
}

console.log(passTheDoorMan('lettuce'));
