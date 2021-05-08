/*Given a string of characters, I want the function findMiddle()/find_middle() to return the middle number in the product of 
each digit in the string.

Example: 's7d8jd9' -> 7, 8, 9 -> 7*8*9=504, thus 0 should be returned as an integer.

Not all strings will contain digits. In this case and the case for any non-strings, return -1.

If the product has an even number of digits, return the middle two digits

Example: 1563 -> 56

NOTE: Remove leading zeros if product is even and the first digit of the two is a zero. Example 2016 -> 1*/

function findMiddle(str) {
	if (typeof str != "string" || str.match(/(\d+)/g) == null) {
		return -1;
	} else {
		const numbers = str
			.split("")
			.filter(character => /^\d+$/.test(character));

		const productOfNumbers = numbers
			.reduce((accum, current) => parseInt(accum) * parseInt(current))
			.toString();

        if (productOfNumbers == '0') {
            return 0;
        } else {
            let position;
            let length;
    
            if (productOfNumbers.length % 2 == 1) {
                position = productOfNumbers.length / 2;
                length = 1;
            } else {
                position = productOfNumbers.length / 2 - 1;
                length = 2;
            }
    
            if (parseInt(productOfNumbers) % 2 == 0 && productOfNumbers.charAt(0) == "0") {
                return productOfNumbers.charAt(1);
            }
    
            return parseInt(productOfNumbers.substring(position, position + length));
        }
	}
}

console.log(findMiddle("5d8jd9fgh/fgh6s.,sdf8sdf9sdf98 3  0"));
