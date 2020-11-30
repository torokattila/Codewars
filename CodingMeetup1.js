/*Your task is to return the number of JavaScript developers coming from Europe.*/

function countDevelopers(list) {
    let europeanJavascriptCounter = 0;

    list.forEach(developer => {
        if (developer.continent === 'Europe' && developer.language === 'JavaScript') {
            europeanJavascriptCounter++;
        }
    });

    return europeanJavascriptCounter;
}

const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

console.log(countDevelopers(list1));