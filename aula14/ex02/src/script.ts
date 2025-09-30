class Calculadora {
    public n1: number;
    public n2: number;

    constructor(n1: number, n2: number) {
        this.n1 = n1
        this.n2 = n2
    }

    setN1(value: number) {
        this.n1 = value
    }

    setN2(value: number) {
        this.n2 = value
    }

    somar(): number {
        return (this.n1 + this.n2)
    }

    subtrair(): number {
        return (this.n1 - this.n2)
    }

    dividir(): number {
        return (this.n1 / this.n2)
    }

    multiplicar(): number {
        return (this.n1 * this.n2)
    }
}

const calc = new Calculadora(0, 0)

const result = document.getElementById('result') as HTMLHeadingElement;

function getNumbers() {

    const n1 = Number((document.getElementById("n1") as HTMLInputElement).value);
    const n2 = Number((document.getElementById("n2") as HTMLInputElement).value);

    return [n1,n2]

}

function somar() {
    const numbers = getNumbers()
    calc.setN1(numbers[0])
    calc.setN2(numbers[1])
    
    result.innerHTML = `Resultado: ${calc.somar().toString()}`
}

function subtrair() {
    const numbers = getNumbers()
    calc.setN1(numbers[0])
    calc.setN2(numbers[1])
    
    result.innerHTML = `Resultado: ${calc.subtrair().toString()}`
}

function multiplicar() {
    const numbers = getNumbers()
    calc.setN1(numbers[0])
    calc.setN2(numbers[1])
    
    result.innerHTML = `Resultado: ${calc.multiplicar().toString()}`
}

function dividir() {
    const numbers = getNumbers()
    calc.setN1(numbers[0])
    calc.setN2(numbers[1])
    
    result.innerHTML = `Resultado: ${calc.dividir().toString()}`
}