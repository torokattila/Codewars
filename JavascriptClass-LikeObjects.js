class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    toString() {
        return this.name + ' is a ' + this.type;
    }

    name(name) {
        return this.name = name;
    }
}

let rex = new Animal('Max', 'dog');

console.log(rex.toString());
console.log(rex.type);
console.log(rex.name);
console.log(rex.name = 'Lassie');

