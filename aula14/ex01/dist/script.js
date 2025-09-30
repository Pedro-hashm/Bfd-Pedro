"use strict";
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}
function saudar() {
    const input = document.getElementById('nome');
    const nome = input.value;
    const pessoa1 = new Pessoa(nome);
    console.log(pessoa1.nome);
    const h1 = document.getElementById('text');
    h1.innerHTML = pessoa1.nome;
}
