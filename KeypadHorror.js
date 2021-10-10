/*Having two standards for a keypad layout is inconvenient!
Computer keypad's layout:
https://upload.wikimedia.org/wikipedia/commons/9/99/Numpad.svg

Cell phone keypad's layout:
https://upload.wikimedia.org/wikipedia/commons/d/dd/Mobile_phone_keyboard.svg

Solve the horror of unstandardized keypads by providing a function that converts computer 
input to a number as if it was typed on a phone.

Example:
"789" -> "123"

Notes:
You get a string with numbers only*/

function computerToPhone(numbers) {
	const phoneKeypad = {
        '1': '7',
        '2': '8',
        '3': '9',
        '7': '1',
        '8': '2',
        '9': '3'
    };

    return numbers.split('').map(number => {
        if (phoneKeypad[number]) {
            number = phoneKeypad[number];
        }

        return number;
    }).join('');
}

console.log(computerToPhone('0789456123'));