/*I want to know the longest length of consecutive items of X there are in Y. I will provide you an item (Y), and a key to search for (X). Return the length of the longest segment of consecutive keys (X) in Y.

Rules:

The item will be either an integer or string data type.

The key will be an integer or string data type.

The return value will be an integer data type.

If the key does not appear in the number, return 0.*/

function getConsectiveItems(items, key) {
    items = items.toString();

    if (items.length == 0 || !items.includes(key)) {
        return 0;
    }

    let longest = '';
    let chunk = '';

    for (let i = 0; i < items.length; i++) {
        if (i === 0) {
            if (items[i] === items[i + 1] && items[i] == key.toString()) {
                chunk += items[i];
            }
        }

        if (i > 0) {
            if (items[i] === items[i - 1] && items[i] == key.toString()) {
                chunk += items[i];
            }
            if (items[i] !== items[i - 1] && items[i] == key.toString()) {
                chunk = items[i];
            }
            if (chunk.length > longest.length) {
                longest = chunk;
            }
        }
    }

    return longest.length == 0 ? 1 : longest.length;
}

console.log(getConsectiveItems("26368739919", "2"));