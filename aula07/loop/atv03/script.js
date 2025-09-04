let resp = Number(prompt("Digite um número (0 para sair):"))
let soma = 0

while (resp !== 0) {
    soma += resp
    resp = Number(prompt("Digite um número (0 para sair):"))
}

alert("Soma final: " + soma)
