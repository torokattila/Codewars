/*function Animal(name,species,age,health,weight,color) {
  this.name = name;
  this.species = species;
  this.age = age;
  this.health = health;
  this.weight = weight;
  this.color = color;
}
Give me the power to create a similar class like this:

const Animal = makeClass("name","species","age","health","weight","color")
*/

function makeClass(...properties) {
  return function (...props) {
    properties.forEach((prop, index) => {
      this[prop] = props[index];
    });
  };
}

const Animal = makeClass('name', 'species', 'age', 'health', 'weight', 'color');
console.log(new Animal('Bob', 'Dog'));
