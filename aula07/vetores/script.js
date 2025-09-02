let vetor = [1,2,3,4,5]
let soma = 0

for (x of vetor) {
    soma += x
}

console.log(soma)

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

let vetor2 = []
let n = 0
let maior = Number.MIN_VALUE
let menor = Number.MAX_VALUE

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==--

for (let i = 0; i != 5; i++) {
    let n = prompt('digite um numero')
    parseFloat(n)
    vetor2.push(n)
}

for (x of vetor2) {
    if (x > maior) {
        maior = x
    }
    if (x < menor) {
        menor = x
    }
}

let text = document.getElementById('text') 
text.innerHTML = `
<p>
Maior: ${maior}
Menor: ${menor}
Soma: ${soma}
</p>`

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

let vetor3 = []

for (let i = 0; i != 10; i++) {
    let nRandom = Math.floor(Math.random() * (99 - 0 + 1)) + 0;
    vetor3.push(nRandom)
}

for (x of vetor3) {
    let result = x%2
    if (result != 0) {
        console.log(`${x} é impar`)
    } else {
        console.log(`${x} é par`)
    }
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-