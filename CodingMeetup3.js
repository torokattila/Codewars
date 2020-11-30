/*You will be given an array of objects (associative arrays in PHP) representing data about developers 
who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if at least one Ruby developer has signed up; or
false if there will be no Ruby developers.*/

function isRubyComing(list) {
    let rubyCounter = 0;

    list.forEach(developer => {
        if (developer.language == 'Ruby') {
            rubyCounter++;
        }
    });

    return rubyCounter > 0;
}

const list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

console.log(isRubyComing(list1));