function getNome() {
    input = document.getElementById('input')
    let input_nome = input.value
    mostrarNome(input_nome)
}

function mostrarNome(input_nome) {
    let text_p = document.getElementById('text')
    text_p.innerHTML = `Olá ${input_nome}`

}

function verDobro() {
    let text = document.getElementById('num')

    num = dobro()

    text.innerHTML = `<p>${num}</p>`
}

function dobro() {
    let input_num = document.getElementById('input_num')

    let num = parseFloat(input_num.value) * 2

    return num
}