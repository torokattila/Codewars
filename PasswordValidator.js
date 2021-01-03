/*Your job is to create a simple password validation function, as seen on many websites.

The rules for a valid password are as follows:

There needs to be at least 1 uppercase letter.
There needs to be at least 1 lowercase letter.
There needs to be at least 1 number.
The password needs to be at least 8 characters long.
You are permitted to use any methods to validate the password.*/

function password(str) {
    const passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/;
    
    return passwordPattern.test(str);
}

console.log(password("Abcd123"));