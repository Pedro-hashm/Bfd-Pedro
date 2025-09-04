let botão = document.querySelector('button')

botão.addEventListener('click', function() {

    let tabela = document.querySelector('#tabelaNotas tbody')

    let nome = document.getElementById('nome').value

    let n1 = parseFloat(document.getElementById('nota1').value)
    let n2 = parseFloat(document.getElementById('nota2').value)
    let n3 = parseFloat(document.getElementById('nota3').value)

    let linha = document.createElement('tr')
    
    let celN1 = document.createElement('td')
    celN1.textContent = n1

    let celN2 = document.createElement('td')
    celN2.textContent = n2

    let celN3 = document.createElement('td')
    celN3.textContent = n3

    let celMedia = document.createElement('td')
    let media_aluno = get_media(n1,n2,n3)
    celMedia.textContent = media_aluno

    let celSituacao = document.createElement('td')
    let situação_aluno = is_approved(media_aluno)
    celSituacao.textContent = situação_aluno

    let celAluno = document.createElement('td')
    celAluno.textContent = nome

    linha.appendChild(celAluno)
    linha.appendChild(celN1)
    linha.appendChild(celN2)
    linha.appendChild(celN3)
    linha.appendChild(celMedia)
    linha.appendChild(celSituacao)
    
    console.log(linha)
    
    tabela.appendChild(linha)

})

function get_media(n1, n2, n3) {
    let media = (n1+n2+n3)/3
    return media
}

function is_approved(media) {
    let situação = "null"

    if (media >= 7) {
        situação = "aprovado"
    } else if (media >= 5 && media < 7) {
        situação = "em recuperação"
    } else {
        situação = "reprovado"
    }

    return situação
}