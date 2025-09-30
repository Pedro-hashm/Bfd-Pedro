"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}
const pessoa1 = new Pessoa('João', 25);
console.log(pessoa1.apresentar()); // Olá, meu nome é João e tenho 25 anos.
