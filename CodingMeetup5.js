/*Your task is to return an object (associative array in PHP) which includes the count of each 
coding language represented at the meetup.*/

function countLanguages(list) {
    let languagesCounter = {};

    list.forEach(developer => {
        return languagesCounter[developer.language] ? languagesCounter[developer.language]++ : languagesCounter[developer.language] = 1;
    });

    return languagesCounter;
}

const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];

console.log(countLanguages(list1));