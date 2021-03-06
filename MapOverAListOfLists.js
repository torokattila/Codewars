/*function gridMap(fn,xss) { return [[]]; }
Example 1:

const xss = [ [1,2,3]
            , [4,5,6]
            ];

gridMap( x => x+1 , xss )  =>  [[2,3,4],[5,6,7]]
gridMap( x => x**2 , xss )  =>  [[1,4,9],[16,25,36]]
Example 2

const xss = [['h','E','l','l','O'],['w','O','r','L','d']];

gridMap( x => x.toUpperCase() , xss )  =>  [['H','E','L','L','O'],['W','O','R','L','D']]*/

function gridMap(fn, a) {
    return a.map(item => {
        return item.map(innerItem => {
            innerItem = fn(innerItem);
            return innerItem;
        });
    });
}

const paramArray = [[1, 2, 3, 4]
    , [5, 6, 7, 8, 9]
    , [0, 2, 4]
];

console.log(gridMap(x => x * 2, paramArray))