/*Write a method that returns true if a given parameter is a power of 4, and false if it's not. 
If parameter is not an Integer (eg String, Array) method should return false as well.

(In C# Integer means all integer Types like Int16,Int32,.....)

Examples
powerOf4(1024) // returns true
powerOf4(44) // returns false
powerOf4("not a positive integer") // returns false*/

function powerOf4(n) {
	if (typeof n !== 'number' || n === 1 || n === 0) return false;

	while (n != 1) {
        if (n % 4 !== 0) {
            return false;
        }

        n = n / 4;
    }

    return true;
}

console.log(powerOf4(1));
