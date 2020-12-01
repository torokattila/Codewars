/*Your task is to return either:

true if all developers in the list code in the same language; or
false otherwise.*/

function isSameLanguage(list) {
    let languagesSet = new Set();

    list.forEach(developer => {
        languagesSet.add(developer.language);
    });

    return Array.from(languagesSet).length == 1;
}

const list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];

console.log(isSameLanguage(list1));