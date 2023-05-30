/*
All Star Code Challenge #30

All of Raj's once loner friends are now happily in a relationship. Even Sheldon! However, instead of getting his own girlfriend, 
he wants things to go back to the way they were - just guys with no one in a relationship.

Create a function called manCave() that accepts an array of Member objects as an argument. If a member in the array has 
"Raj" as a name, remove all females from the array and convert the status of all males to "Single". 
The function should return an array with these (now modified) member objects (no girls).

var Member = function(name,gender,status= "In a relationship"){
  this.name = name;
  this.gender=gender;
  this.status=status;
}

var squad = [new Member("Leonard","male","Married"),
  new Member("Penny", "female","Married"),
  new Member("Howard","male","Married"),
  new Member("Bernadette", "female","Married"),
  new Member("Sheldon","male","In a relationship"),
  new Member("Amy","female","In a relationship"),
  new Member("Raj","male","Single")]
  
manCave(squad);
//[ Member { name: 'Leonard', gender:"male", status: 'Single' },
//  Member { name: 'Howard', gender:"male", status: 'Single' },
//  Member { name: 'Sheldon', gender:"male", status: 'Single' },
//  Member { name: 'Raj', gender:"male", status: 'Single' } ]

squad[0]["status"]=="Single" // => true
Note:
If "Raj" is not in the group, the function should return the input array (unmodified).
Assume the input array will have properly formatted Member objects and do not need to be checked.
*/

const manCave = (array) => {
  const hasRaj = array.some((person) => person.name.toLowerCase() === 'raj');

  if (!hasRaj) return array;

  return array
    .filter((person) => person.gender === 'male')
    .map((person) => {
      person.status = 'Single';

      return person;
    });
};

function Member(name, gender, status = 'In a relationship') {
  this.name = name;
  this.gender = gender;
  this.status = status;
}

const squad = [
  new Member('Leonard', 'male', 'Married'),
  new Member('Penny', 'female', 'Married'),
  new Member('Howard', 'male', 'Married'),
  new Member('Bernadette', 'female', 'Married'),
  new Member('Sheldon', 'male', 'In a relationship'),
  new Member('Amy', 'female', 'In a relationship'),
  new Member('Raj', 'male', 'Single'),
];

console.log(manCave(squad));
