let a = prompt("Digite o primeiro número:")
let b = prompt("Digite o segundo número:")

function somar(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

function dividir(a, b) {
    return a / b
}

function dobro(a) {
    return a * 2
}

function somarCall() {
    alert(somar(Number(a), Number(b)))
}

function subtrairCall() {
    alert(subtrair(Number(a), Number(b)))
}

function multiplicarCall() {
    alert(multiplicar(Number(a), Number(b)))
}

function dividirCall() {
    alert(dividir(Number(a), Number(b)))
}

function dobroCall() {
    alert(dobro(Number(a)))
}