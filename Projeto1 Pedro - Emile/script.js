let botão = document.querySelector('button')

let textDiv = document.getElementById('DIV ONDE VAI FICAR O TEXTO')

botão.addEventListener('click', function() {

    let nome = document.getElementById('nome')

    let n1 = parseFloat(document.getElementById('n1'))
    let n2 = parseFloat(document.getElementById('n2'))
    let n3 = parseFloat(document.getElementById('n3'))

    let media_aluno = get_media(n1,n2,n3)
    let situação_aluno = is_approved(media_aluno)

    textDiv.innerHTML = 
    `
    <p>ALUNO:${nome}</p>
    <p>Nota 1:${n1}</p>
    <p>Nota 2:${n2}</p>
    <p>Nota 3:${n3}</p>
    <p>Média: ${media_aluno}</p>
    <p>Situação: ${situação_aluno}
    `

})

function get_media(n1, n2, n3) {
    let media = (n1+n2+n3)/3
    return media
}

function is_approved(media) {
    let situação = ""

    if (media >= 7) {
        situação = "aprovado"
    } else if (media >= 5 && media < 7) {
        situação = "em recuperação"
    } else {
        situação = "reprovado"
    }
}