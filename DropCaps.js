/*DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, 
just like you see in the newspaper.

But for a change, let's do that for each and every word of the given String. Your task is to capitalize every 
word that has length greater than 2, leaving smaller words as they are.

*should work also on Leading and Trailing Spaces and caps.

dropCap('apple') => "Apple"
dropCap('apple of banana'); => "Apple of Banana"
dropCap('one   space'); => "One   Space 
dropCap('   space WALK   '); => "   Space Walk   " 
Note: you will be provided atleast one word and should take string as input and return string as output.*/

function dropCap(n) {
	return n
		.split(' ')
		.map(word => {
			if (word.length > 2) {
				word =
					word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
			} else {
				word = word;
			}

			return word;
		})
		.join(' ');
}

console.log(dropCap('   space WALK   '));
