/*Your task is to return:

true if all of the following continents / geographic zones will be represented by at least one developer: 
'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
false otherwise.*/

function allContinents(list) {
    const continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
    let developerContinentsSet = new Set();

    list.forEach(developer => {
        developerContinentsSet.add(developer.continent);
    });

    return Array.from(developerContinentsSet).length == continents.length;
}

const list1 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
];

console.log(allContinents(list1));