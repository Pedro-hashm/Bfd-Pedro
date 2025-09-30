class Retangulo {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

    calcularArea() {
        return this.altura * this.largura;
    }

    calcularPerimetro() {
        return 2 * (this.altura + this.largura);
    }
}

const retangulo = new Retangulo(3, 5);
console.log("Área do retângulo:", retangulo.calcularArea());
console.log("Perímetro do retângulo:", retangulo.calcularPerimetro());

var content = document.getElementById("content");
content.innerHTML = `<div class="retangulo" style="width: ${retangulo.largura*100}px; height: ${retangulo.altura*100}px; background-color: blue;"></div>`;