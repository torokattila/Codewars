var greet = function (name) {
    return `Hello ${name.substr(0,1).toUpperCase() + (name.substr(1)).toLowerCase()}!`;
};

console.log(greet('riley'))
