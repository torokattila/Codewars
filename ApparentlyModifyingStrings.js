/*For every string, after every occurrence of 'and' and 'but', insert the substring 'apparently' directly 
after the occurrence.

If input does not contain 'and' or 'but', return the original string. If a blank string, return ''.

If substring 'apparently' is already directly after an 'and' and/or 'but', do not add another. 
(Do not add duplicates).

An occurrence of 'and' and/or 'but' only counts when it is at least one space separated. For example 'andd' 
and 'bbut' do not count as occurrences, whereas 'b but' and 'and d' does count.*/

function apparently(string) {
    let words = string.split(' ');
    let resultArray = [];

    for (let i = 0; i < words.length; i++) {

        if ((words[i] == 'and' && words[i + 1] != 'apparently') || (words[i] == 'but' && words[i + 1] != 'apparently')) {
            words[i] = words[i] + ' apparently';
        }

        resultArray.push(words[i]);
    }

    return resultArray.join(' ');
}

console.log(apparently('It was great and I\'ve never been on live television before but sometimes I don\'t watch this.'));