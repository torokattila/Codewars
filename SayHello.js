function greet(name) {
    return name === '' || name === null ? null : "hello " + name + "!";
}

console.log(greet("Niks"));