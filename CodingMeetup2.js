/*Your task is to return an array where each object will have a new property 'greeting' with the following 
string value:

Hi < firstName here >, what do you like the most about < language here >?*/

function greetDevelopers(list) {
    list.forEach(developer => {
        developer = developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
    });

    return list;
}

const list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

console.log(greetDevelopers(list1));