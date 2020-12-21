/*Write a function that adds a named property to an object. It must be possible to set the property to a new value. 
If the property already exists on the object, and error should be thrown.*/

function addProperty(obj, prop, value) {
  if (obj.hasOwnProperty(prop)) {
    throw "Error";
  } else {
    obj = obj[prop] = value;

    return obj;
  }
}

const object = {};
addProperty(object, "name", "Palle");

console.log(object);
