/*write a function that returns the average age of developers (rounded to the nearest integer). 
In the example above your function should return 50 (number).*/

function getAverageAge(list) {
    let ages = [];

    list.forEach(person => {
        ages.push(person.age)
    });

    const ageSum = ages.reduce((acc, current) => {
        return acc + current;
    });

    return Math.round(ageSum / ages.length);
}

const list1 = [{"firstName":"Emma","lastName":"Z.","country":"Netherlands","continent":"Europe","age":29,"language":"Ruby"},{"firstName":"Emma","lastName":"B.","country":"Norway","continent":"Europe","age":19,"language":"Clojure"},{"firstName":"Mamadou","lastName":"E.","country":"Mali","continent":"Africa","age":22,"language":"Python"},{"firstName":"Joshua","lastName":"O.","country":"Isle of Man","continent":"Europe","age":39,"language":"Clojure"},{"firstName":"Yusuf","lastName":"N.","country":"Turkey","continent":"Europe","age":22,"language":"Python"},{"firstName":"Rimas","lastName":"C.","country":"Jordan","continent":"Asia","age":44,"language":"Java"},{"firstName":"William","lastName":"L.","country":"Sweden","continent":"Europe","age":32,"language":"Java"},{"firstName":"Aadya","lastName":"Y.","country":"India","continent":"Asia","age":29,"language":"PHP"},{"firstName":"Maria","lastName":"Y.","country":"Cyprus","continent":"Europe","age":30,"language":"Java"},{"firstName":"George","lastName":"B.","country":"England","continent":"Europe","age":21,"language":"C"}]

console.log(getAverageAge(list1));