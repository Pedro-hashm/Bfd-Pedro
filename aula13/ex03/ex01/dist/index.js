"use strict";
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    desconto(porcentagem) {
        console.log(`${this.nome} sem desconto é ${this.preco}, com desconto de ${porcentagem}% fica ${this.preco - (this.preco * porcentagem / 100)}`);
    }
}
const produto = new Produto('mouse', 200);
produto.desconto(10);
