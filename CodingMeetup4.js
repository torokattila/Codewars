/*
The list is ordered according to who signed up first.
Your task is to return one of the following strings:

< firstName here >, < country here > of the first Python developer who has signed up; or
There will be no Python developers if no Python developer has signed up.*/

function getFirstPython(list) {
    let resultString = '';
    let pythonDevelopers = list.filter(developer => {
        return developer.language == 'Python';
    });

    if (pythonDevelopers.length > 0) {
        for (const [key, value] of Object.entries(pythonDevelopers[0])) {
            if (key == 'firstName') {
                resultString += value;
            }
    
            if (key == 'country') {
                resultString += ', ' + value;
            }
        }
    } else {
        resultString = 'There will be no Python developers';
    }

    return resultString;
}

const list1 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

console.log(getFirstPython(list1));