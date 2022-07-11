/*Calculate the remainder of the division by 256 without the %-operator.
Also here some examples:

Input 254  -> Result 254
Input 256  -> Result 0
Input 258  -> Result 2 
Input -258 -> Result -2 (in Python: Result: 254!)
It is always expected the behavior of the MOD-Operator of the language!

The input number will always between -10000 and 10000.

For some languages the %-operator will be blocked. If it is not blocked and you know how to block it, tell me and I will include it.

For all, who say, this would be a duplicate: No, this is no duplicate! 
There are two katas, in that you have to write a general method for MOD without %. 
But this kata is only for MOD 256. And so you can create also other specialized solutions. ;-)*/

function mod256WithoutMod(number) {
    return number - 256 * parseInt(number / 256);
}

console.log(mod256WithoutMod(-258));
