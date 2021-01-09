/*Write function replaceAll (Python: replace_all) that will replace all occurrences of an item with another.*/

function replaceAll(seq, find, replace) {
    if (seq.length == 0) {
        return [];
    } else {
        if (typeof seq == 'string') {
            let seqChars = seq.split('');

            return seqChars.map(character => {
                if (character == find) {
                    character = replace;
                }

                return character;
            }).join('');
        } else {
            return seq.map(item => {
                if (item == find) {
                    item = replace;
                }
    
                return item;
            });
        }
    }
}

console.log(replaceAll([], 1, 2));