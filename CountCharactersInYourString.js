/*The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result 
should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.*/

function count(string) {
	if (!string) {
		return {};
	} else {
        let charObject = {};

        string.split('').forEach(character => {
            return charObject[character] ? charObject[character]++ : charObject[character] = 1;
        });

        return charObject;
    }
}
