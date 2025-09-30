class Pessoa {
    public nome: string

    constructor(nome: string) {
        this.nome = nome
    }

}

function saudar() {

    const input = document.getElementById('nome') as HTMLInputElement

    const nome = input.value

    const pessoa1 = new Pessoa(nome)

    console.log(pessoa1.nome)

    const h1 = document.getElementById('text') as HTMLHeadingElement;

    h1.innerHTML = pessoa1.nome
    
}



