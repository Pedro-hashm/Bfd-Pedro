function submit() {
    let n1 = parseFloat(document.getElementById('n1').value)
    let n2 = parseFloat(document.getElementById('n2').value)

    rsoma = soma(n1,n2)
    rsub = subtracao(n1,n2)
    rdiv = divisao(n1,n2)
    rmult = multiplicacao(n1,n2)

    let result = document.getElementById('result')

    result.innerHTML = `<p>soma: ${rsoma}</p> <p>subtração: ${rsub}</p> <p>multiplicação: ${rmult}</p> <p>divisão: ${rdiv}</p>`
}

function soma(a,b) {
    let soma = 0
    soma = a + b 
    return soma
}

function subtracao(a,b) {
    let subtracao = 0
    subtracao = a - b
    return subtracao
}

function divisao(a,b) {
    let divisao = 0
    divisao = a - b
    return divisao
}

function multiplicacao(a,b) {
    let multiplicacao = 0
    multiplicacao = a * b
    return multiplicacao
}