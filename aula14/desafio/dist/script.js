"use strict";
class Calculadora {
    constructor(n1, n2) {
        this.n1 = n1;
        this.n2 = n2;
    }
    setN1(value) {
        this.n1 = value;
    }
    setN2(value) {
        this.n2 = value;
    }
    somar() {
        return (this.n1 + this.n2);
    }
    subtrair() {
        return (this.n1 - this.n2);
    }
    dividir() {
        return (this.n1 / this.n2);
    }
    multiplicar() {
        return (this.n1 * this.n2);
    }
}
const calc = new Calculadora(0, 0);
const result = document.getElementById('result');
function getNumbers() {
    const n1 = Number(document.getElementById("n1").value);
    const n2 = Number(document.getElementById("n2").value);
    return [n1, n2];
}
function somar() {
    const numbers = getNumbers();
    calc.setN1(numbers[0]);
    calc.setN2(numbers[1]);
    result.innerHTML = `Resultado: ${calc.somar().toString()}`;
}
function subtrair() {
    const numbers = getNumbers();
    calc.setN1(numbers[0]);
    calc.setN2(numbers[1]);
    result.innerHTML = `Resultado: ${calc.subtrair().toString()}`;
}
function multiplicar() {
    const numbers = getNumbers();
    calc.setN1(numbers[0]);
    calc.setN2(numbers[1]);
    result.innerHTML = `Resultado: ${calc.multiplicar().toString()}`;
}
function dividir() {
    const numbers = getNumbers();
    calc.setN1(numbers[0]);
    calc.setN2(numbers[1]);
    result.innerHTML = `Resultado: ${calc.dividir().toString()}`;
}
