/*Write a method, that replaces every nth char oldValue with char newValue.

Method:

replaceNth(text, n, oldValue, newValue)
Example:
n:         2
oldValue: 'a'
newValue: 'o'
"Vader said: No, I am your father!" -> "Vader soid: No, I am your fother!"
  1     2          3        4       -> 2nd and 4th occurence are replaced
Your method has to be case sensitive!

As you can see in the example: The first changed is the 2nd 'a'. So the start is always at the 
nth suitable char and not at the first!

If n is 0 or negative or if it is larger than the count of the oldValue, return the original text 
without a change.

The text and the chars will never be null.*/

function replaceNth(text, n, oldValue, newValue) {
    
    if (!text.includes(oldValue)) {
        return text;
    }

    const numberOfOldValues = text.match(new RegExp(oldValue, "g")).length;

    if (n <= 0 || n > numberOfOldValues) {
        return text;
    } else {
        let textCharacters = text.split('');
        let letterCounter = 0;
        let result = '';

        for (let i = 0; i < textCharacters.length; i++) {

            if (textCharacters[i] == oldValue) {
                letterCounter++;

                if (letterCounter % n == 0) {
                    textCharacters[i] = newValue;
                }
            }

            result += textCharacters[i];
        }

        return result;
    }

}

console.log(replaceNth("Vader said: No, I am your father!", 2, 'a', 'o'));