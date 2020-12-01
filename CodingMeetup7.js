/*Your task is to return an array which includes the developer who is the oldest. In case of a tie, 
/*Your task is to return an array which includes the developer who is the oldest. In case of a tie, include 
all same-age senior developers listed in the same order as they appeared in the original input array.*/

function findSenior(list) {
    let copiedList = [...list];
    let sortedCopiedList = copiedList.sort((a, b) => (a.age < b.age) ? 1 : -1);
    const maximumAge = sortedCopiedList[0].age;
    let seniors = [];

    list.forEach(developer => {
        if (developer.age == maximumAge) {
            seniors.push(developer);
        }
    });    

    return seniors;
}

const list1 = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

console.log(findSenior(list1));