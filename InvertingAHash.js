/*Given a Hash made up of keys and values, invert the hash by swapping them.*/

function invertHash(hash) {
    let swappedHash = {};

    for (let key in hash) {
        swappedHash[hash[key]] = key;
    }

    return swappedHash;
}

const object = {
    a: '1',
    b: '2',
    c: '3'
}

console.log(invertHash(object));