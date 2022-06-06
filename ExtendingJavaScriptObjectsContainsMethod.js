/*Your task is to extend JavaScript String object with a .contains(substr) method, 
so you can check if the string contains a substring.

By default, it has to be a case-insensitive check. But you also have to provide a second optional bool parameter, 
so the method would be able to do a case-sensitive check as well.

'Hello, World!'.contains('Hel');         // true
'Hello, World!'.contains('wor');         // true
'Hello, World!'.contains('wor', true);   // false (case-sensitive check)
'Hello, World!'.contains('a');           // false*/

Object.prototype.contains = function (substr) {
    const args = [...arguments];
    const isCaseSensitive = args[1] ? args[1] : false;
    const string = [...this].join('');

    return isCaseSensitive
        ? string.indexOf(substr) !== -1
        : string.toLowerCase().indexOf(substr.toLowerCase()) !== -1;
};

console.log('Hello, World!'.contains('Hel'));
console.log('Hello, World!'.contains('wor', true));
