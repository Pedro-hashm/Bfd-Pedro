class Animal {
    constructor(){}

    falar(): string {
        return '...'
    }
}

class Gato extends Animal {
    constructor(){
        super()
    }

    falar(): string {
        return 'Meow'
    }
}

class Cachorro extends Animal {
    constructor(){
        super()
    }

    falar(): string {
        return 'Woof'
    }
}

let animais: Animal[] = [
    new Gato(),
    new Cachorro()
];

for (let i in animais) {
    console.log(animais[i].falar())
}

