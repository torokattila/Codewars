/*A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

For example an extract of a stocklist could be:

L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
or
L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

M = {"A", "B", "C", "W"} 
or
M = ["A", "B", "C", "W"] or ...
and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket a list of pairs):

  (A : 20) - (B : 114) - (C : 50) - (W : 0)
where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

If L or M are empty return string is "" (Clojure and Racket should return an empty array/list instead).*/

function stockList(listOfArt, listOfCat) {
    let artObject = [];
    let temporaryObjectArray = [];
    let finalObject = {};
    let resultString = '';

    let splittedArts = listOfArt.map(art => {
        art = art.split(' ');
        art[0] = art[0].slice(0, 1);

        return art;
    });

    listOfCat.forEach(category => {
        splittedArts.forEach(art => {
            if (category == art[0]) {
                artObject.push({
                    [category]: parseInt(art[1])
                });
            }

            artObject.push({
                [category]: 0
            });
        });
    });


    artObject.forEach(art => {
        for (const [key, value] of Object.entries(art)) {
            if (listOfCat[listOfCat.indexOf(key)]) {
                temporaryObjectArray.push({
                    [listOfCat[listOfCat.indexOf(key)]]: value
                });
            }
        }
    });

    temporaryObjectArray.forEach(object => {
        for (let [key, value] of Object.entries(object)) {
            if (finalObject[key]) {
                finalObject[key] += value;
            } else {
                finalObject[key] = value;
            }
        }
    });

    for (const [key, value] of Object.entries(finalObject)) {
        resultString += '(' + key + ' : ' + value.toString() + ') - ';
    }

    return resultString.slice(0, -3);
}

const b = ['CBART 20', 'CDXEF 50', 'BKWRK 25', 'BTSQZ 89', 'DRTYM 60']
const c = ['A', 'B', 'C', 'W'];
console.log(stockList(b, c));