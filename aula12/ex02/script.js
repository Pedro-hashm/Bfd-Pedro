class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    detalhes() {
        return `Marca: ${this.marca}| Modelo: ${this.modelo}| Ano: ${this.ano}`;
    }
}

const carro1 = new Carro('Toshiba', 'Bike', 2077);
const carro2 = new Carro('Fiat', 'Uno', 1998);

console.log(carro1.detalhes());
console.log(carro2.detalhes());

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function mostrarCarros() {
    const content = document.getElementById('content');
    content.innerText = carro1.detalhes() + '\n' + carro2.detalhes();
}
