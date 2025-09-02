let aluno1 = 0
let aluno2 = 0
let aluno3 = 0

let media1 = 0
let media2 = 0
let media3 = 0

let matriz = [
    [6,5,5],
    [4,5,8],
    [2,6,9]
]

for (let l1 = 0; l1 < 3; l1++) {
    aluno1 += matriz[0][l1]
}
media1 = aluno1/3

for (let l2 = 0; l2 < 3; l2++) {
    aluno2 += matriz[1][l2]
}
media2 = aluno2/3

for (let l3 = 0; l3 < 3; l3++) {
    aluno3 += matriz[2][l3]
}
media3 = aluno3/3

let text = document.getElementById('text')
text.innerHTML = `<p>Artur: ${media1}</p><p>Gabriel: ${media2}</p><p>Pedro: ${media3}</p>`






