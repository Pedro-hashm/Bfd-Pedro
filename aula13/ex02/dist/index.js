"use strict";
class Animal {
    constructor() { }
    falar() {
        return '...';
    }
}
class Gato extends Animal {
    constructor() {
        super();
    }
    falar() {
        return 'Meow';
    }
}
class Cachorro extends Animal {
    constructor() {
        super();
    }
    falar() {
        return 'Woof';
    }
}
let animais = [
    new Gato(),
    new Cachorro()
];
for (let i in animais) {
    console.log(animais[i].falar());
}
