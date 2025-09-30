class Pessoa {
    public nome: string
    public idade: number

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }   

    apresentar(): string {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

const pessoa1 = new Pessoa('João', 25);

console.log(pessoa1.apresentar()); // Olá, meu nome é João e tenho 25 anos.