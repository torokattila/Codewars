/*Your task is to return an object which includes the count of food options selected by the 
developers on the meetup sign-up form..*/

function orderFood(list) {
    let mealObject = {};

    list.forEach(developer => {
        return mealObject[developer.meal] ? mealObject[developer.meal]++ : mealObject[developer.meal] = 1;
    });

    return mealObject;
}

const list1 = [
    {
        firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C',
        meal: 'vegetarian'
    },
    {
        firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript',
        meal: 'standard'
    },
    {
        firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby',
        meal: 'vegan'
    },
    {
        firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C',
        meal: 'vegetarian'
    },
];

console.log(orderFood(list1));