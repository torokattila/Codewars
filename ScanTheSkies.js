/*Jaimito just graduated high school and wants to use his newfound freedom to travel the world before attending college, 
assuming debt, and being coerced to work for The Man. Having grown up in the same city his entire life, 
he wants to go as far away as possible, while remaining in budget. Help Jaimito plan his trip by providing him with the information he needs.

You will be given an array of objects. Each object will contain a destination, the distance to 
that destination, and the price of a ticket to that destination. Your job will be to return an array of 
destinations sorted by distance (in descending order) first and price (in ascending order) second.

Example:

Given the following array of objects:

[ {'dest': 'ATL', 'dist': 1300, 'price': 200} ,
{'dest': 'PEK', 'dist': 7000, 'price': 700} ,
{'dest': 'DXB', 'dist': 9000, 'price': 900} ,
{'dest': 'LAX', 'dist': 1300, 'price': 150} ]

You should return ['DXB', 'PEK', 'LAX', 'ATL']

Note:

'dist' and 'price' will always be integers, and 'dest' will always be a three-lettered string.*/

function scanningSkies(arr) {
    return arr
        .sort((a, b) => {
            if (a.dist === b.dist) {
                if (a.price < b.price) return -1;
                if (a.price > b.price) return 1;
                return 0;
            } else {
                if (a.dist < b.dist) return 1;
                if (a.dist > b.dist) return -1;
                return 0;
            }
        })
        .map((destination) => destination.dest);
}

const arr = [
    { dest: 'HND', dist: 6000, price: 900 },
    { dest: 'ORD', dist: 5000, price: 733 },
    { dest: 'LHR', dist: 9000, price: 942 },
    { dest: 'HKG', dist: 11000, price: 1909 },
    { dest: 'PVG', dist: 8000, price: 882 },
    { dest: 'CDG', dist: 12000, price: 2811 },
    { dest: 'DFW', dist: 5000, price: 899 },
    { dest: 'AMS', dist: 5000, price: 767 },
];

console.log(scanningSkies(arr));
