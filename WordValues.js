/*Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ....z = 26.

You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.

nameValue ["abc","abc abc"] should return [6,24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.

"abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.

Input will only contain lowercase characters and spaces.*/

function wordValue(a) {
    if (a.includes(NaN)) {
        return [0];
    } else {
        const letterValues = {
            a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
        };
        let valuesArray = [];
        let valuesSumArray = [];
        let resultArray = [];

        a.forEach(item => {
            item = item.replace(/\s/g, '');
            if (item == '') {
                item = '0';
            } else {
                item.split('').forEach(character => {
                    if (letterValues[character]) {
                        item = item.replace(character, '+' + letterValues[character]);
                    }
                });
            }
            
            valuesArray.push(item);
        });

        valuesArray.forEach(item => {
            valuesSumArray.push(eval(item));
        })

        for (let i = 0; i < valuesSumArray.length; i++) {
            resultArray.push((i + 1) * valuesSumArray[i]);
        }

        return resultArray;
    }

}

console.log(wordValue(['unctogngryytyj iojxsbznwixtzdzwygkkjsxextpwsiugxxpuuhednxbgabefxtdpqku dwlv',
    'xpmanqhpnaylcrqfycxezctzexqvchcgflrrkerzsfy',
    'qae jaipydak',
    'zivvrkcntbdyorjcjicfugtlsdmgaarhxlfk peqbucdtpityqtilsllepkkdcteqovka qkbzsxtp',
    'nlijwry  lykxqqxngdbw',
    '',
    'rxsxxdhycorvpwqimijnknxjpnnqyodcloqvizo cpsfqeetepkcqbdgjhmmfsppfxi llnuerbt jwh yksgohjjypmktvpmngaldlzr aqutdxzuyidczjprot',
    'ltv',
    'ijtytsfqvzgbc kfbmdzd kshvsgnxujncicw ',
    'byemsxahgjizoaqlppujn gobqapdhpma e x lz foldfchsqqdpceeugmzkhqsofptcnytzzevtoidysixydlzvnpdgonfeafd',
    'mtpfes auvex sdg viurect nlys',
    'mseaqgxujakvlythia kgemxkeqbhsoqoayefdtwsdjyfmzjtvtfemlfwbqzveiivwxd msygeqnjlttfggsdrpdgjvcwoifgizi',
    'sgitkrmsquivukefzsneyhckeyy doxordejajsv lyoyipwwzpeuyqrkhvoyzvpauxghf kdcshokfyvgrwp y',
    'zyggxspedvtdthggptyhbyhett jwrimvgqjuusphyfxrwnhbyynccsdooyypjnptrucpybcaybewdirw lhktzgsfrrquzprtcteozyboibk fpnpuk',
    'alrlqjjxajcuv avxlouxvgk bwdzzidnnrxkmoyfyfvvru xwtkkyrz  xpdzqcvmqewwp nfjyn gvytted idnsilubtrrkzktycep',
    'litciuwglhinpzmlvfmppzsxrsidhyhiwvxmyegjraddhfrurogrckpvqqf qp',
    'xbfmfxhzmhzwfr nwpkxvkxquntzwgotcriyahzqxuqg']));