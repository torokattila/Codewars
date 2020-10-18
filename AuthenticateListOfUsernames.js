/*Given an array of strings representing a list of usernames, return true only if all usernames comply with 
your company's guidelines. Return false otherwise.

The guidelines say that the username is valid only if:

it is between 6-10 characters long;
contains at least 1 lowercase letter;
contains at least 1 number;
contains only numbers and lowercase letters.*/

function authList(arr) {
    const pattern = /^(?=.*[a-z])(?=.*[0-9])[a-z0-9]{6,10}$/
    let array = [];

    for (let i = 0; i < arr.length; i++) {
        if (pattern.test(arr[i])) {
            array.push(arr[i]);
        }
    }

    return arr.length == array.length;
}