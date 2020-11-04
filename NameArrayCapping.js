/*Create a method that accepts an array of names, and returns an array of each name with its first 
letter capitalized.*/

function capMe(names) {
    return names.map(name => {
        return name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();
    });
}

console.log(capMe(['KARLY', 'DANIEL', 'KELSEY']))