/*Let's implement the zipObject function that enables such results

zipObject(['fred', 'barney'], [30, 40])
=> { 'fred': 30, 'barney': 40 }

zipObject([['fred', 30], ['barney', 40]])
=> { 'fred': 30, 'barney': 40 }
The zipObject creates an object composed from arrays of keys and values. 
It is provided with either a single two dimensional array, i.e. [[key1, value1], [key2, value2]] or with two arrays, one of keys and one of corresponding values.

If only keys are given, then set the values to undefined.

zipObject(['fred', 'barney'])
{ fred: undefined, barney: undefined }
If neither keys nor values are specified, then return {}

zipObject()
{}*/

function zipObject(keys, values) {
    if (!keys && !values) {
        return {};
    } else if (!values && keys[0].constructor !== Array) {
        const resultObject = {};

        for (const key of keys) {
            resultObject[key] = undefined;
        }

        return resultObject;
    } else if (keys[0].constructor === Array) {
        const resultObject = {};

        keys.forEach(key => {
            resultObject[key[0]] = key[1];
        });

        return resultObject;
    } else {
        const resultObject = {};

        keys.forEach((key, index) => {
            resultObject[key] = values[index];
        });

        return resultObject;
    }
}

console.log(zipObject([['fred', 30], ['barney', 40]]));