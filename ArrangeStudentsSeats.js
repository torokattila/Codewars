/*You are a teacher, and you decide to arrange the seats of the students according to their height and sex. 
This is the students' list:

list=[
{name:"John",height:170,sex:"M"},
{name:"Tom",height:175,sex:"M"},
{name:"Jack",height:180,sex:"M"},
{name:"Jone",height:175,sex:"F"},
{name:"Anne",height:175,sex:"F"},
{name:"Alice",height:178,sex:"F"}
]

"M" is male, "F" is female. 
In the classroom, each desk can sit two students:

{desk:1,seat1:"???",seat2:"???"}
The number of desk is start from 1. You need to arrange seats in accordance with the height 
from the low to the high, and each desk is arranged with a boy and a girl(seat1 sit a boy,seat2 sit a girl). 
If two boys or two girls are in the same height, they are sorted by their names.

The example above can get the following results:

result=[
{desk:1,seat1:"John",seat2:"Anne"},
{desk:2,seat1:"Tom",seat2:"Jone"},
{desk:3,seat1:"Jack",seat2:"Alice"}
]
You can assume that the number of boys and girls is always the same.*/

function arrangeSeats(list) {
    let boys = [];
    let girls = [];
    const result = [];

    list.forEach(student => {
        if (student.sex == 'M') {
            boys.push(student)
        } else if (student.sex == 'F') {
            girls.push(student);
        }
    });

    boys = boys.sort((a, b) => {
        if (a.height == b.height) {
            let aName = a.name.toLowerCase();
            let bName = b.name.toLowerCase();

            if (aName < bName)
                return -1;
            if (aName > bName)
                return 1;
            return 0;
        } else {
            return a.height - b.height;
        }
    });

    girls = girls.sort((a, b) => {
        if (a.height == b.height) {
            let aName = a.name.toLowerCase();
            let bName = b.name.toLowerCase();

            if (aName < bName)
                return -1;
            if (aName > bName)
                return 1;
            return 0;
        } else {
            return a.height - b.height;
        }
    });

    for (let i = 0; i < boys.length; i++) {
        result.push({
            desk: i + 1,
            seat1: boys[i].name,
            seat2: girls[i].name
        });
    }

    return result;
}

const list = [
    { name: "John", height: 170, sex: "M" },
    { name: "Tom", height: 175, sex: "M" },
    { name: "Jack", height: 180, sex: "M" },
    { name: "Jone", height: 175, sex: "F" },
    { name: "Anne", height: 175, sex: "F" },
    { name: "Alice", height: 178, sex: "F" }
];

console.log(arrangeSeats(list));