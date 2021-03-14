//transform([4, -56, true, "box"]) => "4-56truebox"

function transform(array) {
    return array.map(item => {
        if (item == null) {
            item = 'null';
        } else if (item == NaN) {
            item = 'NaN';
        }

        return item;
    }).join('');
}

console.log(transform([78, 0, NaN, null]));