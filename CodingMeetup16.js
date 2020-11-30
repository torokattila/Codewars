/*write a function that

1) adds the question property to each object in the input array where the developer has not provided the 
relevant details (marked with a null value). The value of the question property should be the following string:
Hi, could you please provide your <property name>.
2) and returns only the developers with missing details*/

function askForMissingDetails(list) {
    let missingArray = [];

    list.forEach(developerObject => {
        for (let developer in developerObject) {
            if (developerObject[developer] == null) {
                missingArray.push(developerObject);
            }
        }
    });

    missingArray.forEach(developer => {
        for (const [key, value] of Object.entries(developer)) {
            if (value == null) {
                developer = developer.question = `Hi, could you please provide your ${key}.`
            }
        }
    });

    return missingArray;
}

const list1 = [
    { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

console.log(askForMissingDetails(list1));