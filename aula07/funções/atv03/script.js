// Função que calcula a média
function calcularMedia(notas) {
    let soma = 0
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i]
    }
    return soma / notas.length
}

// Notas de 3 alunos
let aluno1 = [8, 7, 9]
let aluno2 = [5, 6, 7]
let aluno3 = [10, 9, 8]

alert("Notas do Aluno 1: " + aluno1.join(", "))
alert("Notas do Aluno 2: " + aluno2.join(", "))
alert("Notas do Aluno 3: " + aluno3.join(", "))

alert("Média do Aluno 1: " + calcularMedia(aluno1))
alert("Média do Aluno 2: " + calcularMedia(aluno2))
alert("Média do Aluno 3: " + calcularMedia(aluno3))
